import APIRequest, { HTTPMethod } from "../api-request";
import { Account } from 'models';
export default class GetUserInfo extends APIRequest<Account> {
    path: string;
    method: HTTPMethod;
    parse(account: any): Account;
}
