import APIRequest, { HTTPMethod } from "../api-request";
export default class SendSms extends APIRequest<{
    exist: boolean;
}> {
    path: string;
    method: HTTPMethod;
    constructor(phone: string);
}
