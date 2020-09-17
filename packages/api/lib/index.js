import Axios from 'axios';
import { Authentication } from 'data';

var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["DELETE"] = "DELETE";
    HTTPMethod["PUT"] = "PUT";
})(HTTPMethod || (HTTPMethod = {}));
function addTrailingSlash(str) {
    if (str.endsWith("/"))
        return str;
    return str + "/";
}
class APIRequest {
    constructor() {
        this.anonymous = false;
    }
    get response() {
        if (!this._response) {
            this._response = this.task.then(({ status, data }) => {
                try {
                    data = this.parse(data);
                }
                catch (e) { }
                console.log("data----", data);
                if (status === 200)
                    return data;
                return this.handleError(status, data);
            });
        }
        return this._response;
    }
    get meta() {
        return this.task.then(({ meta_data }) => meta_data);
    }
    get task() {
        if (!this._task)
            this._task = this.tryTask();
        return this._task;
    }
    parse(data) {
        return data;
    }
    handleError(reason, data) {
        throw { reason, data };
    }
    async tryTask() {
        try {
            return await this.doTask();
        }
        catch (e) {
            throw this.transformAxoisError(e);
        }
    }
    async doTask() {
        const paramsKey = this.method === HTTPMethod.GET ? "params" : "data";
        const headers = {
            "Content-Type": this.contentType || "application/json",
        };
        if (Authentication.token && !this.anonymous)
            headers.Authorization = "Token " + Authentication.token;
        return (await Axios({
            baseURL: 'https://www.fastmock.site/mock/f80e00dc4d91e015bfcea88be7fb1960/lerna',
            url: addTrailingSlash(this.path),
            method: this.method,
            [paramsKey]: this.params,
            headers,
            onUploadProgress: (e) => {
                if (!this.onProgress)
                    return;
                this.onProgress(Math.floor((e.loaded * 100) / e.total));
            },
        })).data;
    }
    transformAxoisError(error) {
        if (error.response === undefined)
            return { reason: APIRequest.Unknown };
        switch (error.response.status) {
            case 401:
                return { reason: APIRequest.Unauthorized };
            case 403:
                if (error.response.data === "IP blocked")
                    return { reason: APIRequest.IPBlocked };
                else if (error.response.data === "Captcha Required")
                    return { reason: APIRequest.CaptchaRequired };
            default:
                return { reason: APIRequest.Unknown };
        }
    }
}
APIRequest.Unauthorized = "top.hashfuture.errors.network.unauthorized";
APIRequest.IPBlocked = "top.hashfuture.errors.network.ip-blocked";
APIRequest.CaptchaRequired = "top.hashfuture.errors.network.captcha-required";
APIRequest.Unknown = "top.hashfuture.errors.network.unknown";

class Login extends APIRequest {
    constructor(username, password) {
        super();
        this.path = "/user/login";
        this.method = HTTPMethod.POST;
        this.params = { username, password };
    }
    parse(token) {
        console.log("api=------", token);
        return token;
    }
}

export { APIRequest, HTTPMethod, Login };
