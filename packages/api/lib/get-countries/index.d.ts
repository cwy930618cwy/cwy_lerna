import APIRequest, { HTTPMethod } from "../api-request";
import { Country } from 'models';
export default class GetCountryCodes extends APIRequest<Country[]> {
    path: string;
    method: HTTPMethod;
    anonymous: boolean;
    parse(data: any[]): any[];
}
