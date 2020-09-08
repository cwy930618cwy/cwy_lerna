interface apiDataType {
    name: string;
    short_name: string;
    address: string;
    phone: string;
    impression_url_tmp: string;
    introduction: string;
    service_range: string;
    service_fee: any;
    certification_url_tmp: string;
    change_time: string;
    status: string;
    account_id: any;
    tbd_protocol_url_tmp: string;
}
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
export { apiDataType, ruleType };
