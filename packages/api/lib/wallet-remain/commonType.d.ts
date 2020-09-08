interface paramsType {
    coin_name?: string;
}
interface apiDataType {
    coin: string;
    coin_amount: any;
    frozen_amount: any;
    [key: string]: any;
}
interface ruleType {
    coin: string;
    coinAmount: any;
    frozenAmount: any;
    [key: string]: any;
}
export { paramsType, apiDataType, ruleType };
