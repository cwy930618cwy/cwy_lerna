import APIRequest, { HTTPMethod } from "../api-request";
export default class SubmitPersonalCertification extends APIRequest<void> {
    path: string;
    method: HTTPMethod;
    constructor(data: {
        name: string;
        idNumber: string;
        country: number;
        photos: string[];
    });
}
