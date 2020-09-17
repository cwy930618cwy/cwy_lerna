import APIRequest, { HTTPMethod } from "../api-request";
export default class Login extends APIRequest<any> {
    path: string;
    method: HTTPMethod;
    constructor(username: string, password: string);
    parse(token: any): any;
}
