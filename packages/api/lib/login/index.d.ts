import APIRequest, { HTTPMethod } from "../api-request";
import { Account } from 'models';
export default class Login extends APIRequest<{
    token: string;
    account: Account;
}> {
    path: string;
    method: HTTPMethod;
    constructor(phone: string, password: string);
    parse({ token, account }: any): {
        token: any;
        account: Account;
    };
}
