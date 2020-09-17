export declare enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT"
}
export default abstract class APIRequest<T> {
    static readonly Unauthorized = "top.hashfuture.errors.network.unauthorized";
    static readonly IPBlocked = "top.hashfuture.errors.network.ip-blocked";
    static readonly CaptchaRequired = "top.hashfuture.errors.network.captcha-required";
    static readonly Unknown = "top.hashfuture.errors.network.unknown";
    protected abstract path: string;
    protected abstract method: HTTPMethod;
    protected onProgress?(percentage: number): void;
    protected params: any;
    protected contentType?: string;
    protected anonymous: boolean;
    private _task?;
    private _response?;
    get response(): Promise<T>;
    get meta(): Promise<any>;
    private get task();
    protected parse(data: any): T;
    protected handleError(reason: string, data: any): T;
    private tryTask;
    private doTask;
    private transformAxoisError;
}
