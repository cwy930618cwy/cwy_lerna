import { AsyncUsecase } from '../usecase';
interface paramsType {
    page: number;
    pagesize: number;
}
interface ruleType {
    time: string;
    type: any;
    coinName: string;
    amount: any;
    [key: string]: any;
}
export default class TransactionRecordCode implements AsyncUsecase<ruleType[]> {
    params: paramsType;
    execute(): Promise<ruleType[]>;
}
export {};
