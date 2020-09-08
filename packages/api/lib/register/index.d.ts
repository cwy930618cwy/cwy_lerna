import APIRequest, { HTTPMethod } from "../api-request";
import { Account } from 'models';
export default class Register extends APIRequest<{
    account: Account;
    token: string;
}> {
    path: string;
    method: HTTPMethod;
    constructor(params: {
        countryCode: string;
        phone: string;
        password: string;
        smsCode: string;
    });
    parse({ token, account }: any): {
        token: any;
        account: Account;
    };
}
