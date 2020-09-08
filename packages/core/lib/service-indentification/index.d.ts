import { AsyncUsecase } from '../usecase';
interface ruleType {
    name: string;
    shortName: string;
    address: string;
    phone: string;
    impressionUrlTmp: string;
    introduction: string;
    serviceRange: string;
    serviceFee: any;
    certificationUrlTmp: string;
    changeTime: string;
    status: string;
    accountId: any;
    tbdProtocolUrlTmp: string;
}
export default class ServiceIndentification implements AsyncUsecase<ruleType> {
    execute(): Promise<ruleType>;
}
export {};
