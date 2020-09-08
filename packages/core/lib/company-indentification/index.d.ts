import { AsyncUsecase } from '../usecase';
interface ruleType {
    name: string;
    licenseNumber: string;
    capital: string;
    imageUrlTmp: string;
    personName: string;
    IDNumber: string;
    personUrlTmp: any;
    changeTime: string;
    status: string;
    accountId: any;
}
export default class CompanyIndentification implements AsyncUsecase<ruleType> {
    execute(): Promise<ruleType>;
}
export {};
