import APIRequest, { HTTPMethod } from "../api-request";
import { apiDataType, ruleType } from './commonType';
export default class ServiceIndentificationConfirm extends APIRequest<ruleType> {
    path: string;
    method: HTTPMethod;
    constructor();
    parse(data: apiDataType): ruleType;
}
