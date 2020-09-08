import { AsyncUsecase } from '../usecase';
interface paramsType {
    coin_name: string;
}
interface ruleType {
    coin: string;
    coinAmount: any;
    frozenAmount: any;
}
export default class WalletRemain implements AsyncUsecase<ruleType[]> {
    params: paramsType;
    execute(): Promise<ruleType[]>;
}
export {};
