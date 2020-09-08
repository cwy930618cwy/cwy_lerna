interface paramsType {
    page: number;
    pagesize: number;
}
interface apiDataType {
    time: string;
    type: any;
    coin_name: string;
    amount: any;
    [key: string]: any;
}
interface ruleType {
    time: string;
    type: any;
    coinName: string;
    amount: any;
    [key: string]: any;
}
export { paramsType, apiDataType, ruleType };
