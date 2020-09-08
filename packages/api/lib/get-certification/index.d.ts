import APIRequest, { HTTPMethod } from "../api-request";
import { CertificationInfo, AccountType } from 'models';
export default class GetCertification extends APIRequest<CertificationInfo> {
    path: string;
    method: HTTPMethod;
    static readonly InvalidType = "top.hashfuture.errors.network.get-certification.invalid-type";
    constructor(type: AccountType.Personal | AccountType.Enterprise);
    parse({ real_name, ID_number, status }: any): {
        name: any;
        idNumber: any;
        status: CertificationInfo.Status;
    };
}
