import Axios from "axios";
import { Authentication } from "data";

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

function addTrailingSlash (str: string) {
  if (str.endsWith('/')) return str
  return str + '/'
}

export default abstract class APIRequest<T> {
  static readonly Unauthorized = 'top.hashfuture.errors.network.unauthorized'
  static readonly IPBlocked = 'top.hashfuture.errors.network.ip-blocked'
  static readonly CaptchaRequired = 'top.hashfuture.errors.network.captcha-required'
  static readonly Unknown = 'top.hashfuture.errors.network.unknown'

  protected abstract path: string
  protected abstract method: HTTPMethod
  protected onProgress? (percentage: number): void
  protected params: any
  protected contentType?: string
  protected anonymous = false
  private _task?: Promise<any>
  private _response?: Promise<T>

  get response () {
    if (!this._response) {
      this._response = this.task.then(({ status, data }) => {
        try {
          data = this.parse(data)
        } catch (e) {}
        if (status === 'common_OK') return data
        return this.handleError(status, data)
      })
    }
    return this._response
  }

  get meta () {
    return this.task.then(({ meta_data }) => meta_data)
  }

  private get task () {
    if (!this._task) this._task = this.tryTask()
    return this._task
  }

  protected parse (data: any): T {
    return data as T
  }

  protected handleError (reason: string, data: any): T {
    throw { reason, data }
  }

  private async tryTask () {
    try {
      return await this.doTask()
    } catch (e) {
      throw this.transformAxoisError(e)
    }
  }

  private async doTask () {
    const paramsKey = this.method === HTTPMethod.GET ? 'params' : 'data'
    const headers: any = {
      'Content-Type': this.contentType || 'application/json'
    }
    if (Authentication.token && !this.anonymous) headers.Authorization = 'Token ' + Authentication.token
    return (await Axios({
      baseURL: process.env.API_BASE + '/apis/',
      url: addTrailingSlash(this.path),
      method: this.method,
      [paramsKey]: this.params,
      headers,
      onUploadProgress: (e: ProgressEvent) => {
        if (!this.onProgress) return
        this.onProgress(Math.floor(e.loaded * 100 / e.total))
      }
    })).data
  }

  private transformAxoisError (error: any) {
    if (error.response === undefined) return { reason: APIRequest.Unknown }
    switch (error.response.status) {
      case 401: 
        return { reason: APIRequest.Unauthorized }
      case 403: 
        if (error.response.data === 'IP blocked')
          return { reason: APIRequest.IPBlocked }
        else if (error.response.data === 'Captcha Required')
          return { reason: APIRequest.CaptchaRequired }
      default:
        return { reason: APIRequest.Unknown }
    }
  }
}