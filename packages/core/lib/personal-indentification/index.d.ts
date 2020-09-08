import { AsyncUsecase } from '../usecase';
interface ruleType {
    realName: string;
    IDNumber: string;
    imageUrlTmp: any;
    changeTime: string;
    status: string;
    accountId: string;
}
export default class PersonalIndentification implements AsyncUsecase<ruleType> {
    execute(): Promise<ruleType>;
}
export {};
