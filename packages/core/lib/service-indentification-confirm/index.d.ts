import { AsyncUsecase } from '../usecase';
interface ruleType {
    id: any;
    name: string;
    address: string;
    phone: string;
    impressionUrl: any;
    introduction: string;
    legalPersonName: string;
    legalPersonId: string;
    legalPersonUrl: string;
    serviceArea: any;
    resourceUrl: string;
    rank: any;
}
export default class ServiceIndentificationConfirm implements AsyncUsecase<ruleType> {
    execute(): Promise<ruleType>;
}
export {};
