import APIRequest, { HTTPMethod } from "../api-request";
import { paramsType, apiDataType, ruleType } from './commonType';
export default class WalletRemain extends APIRequest<ruleType[]> {
    path: string;
    method: HTTPMethod;
    constructor(params: paramsType);
    parse(data: apiDataType[]): ruleType[];
}
