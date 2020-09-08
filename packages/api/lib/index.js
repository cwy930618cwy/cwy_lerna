import Axios from 'axios';
import { Authentication } from 'data';
import { AccountType, CertificationInfo } from 'models';

var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["DELETE"] = "DELETE";
    HTTPMethod["PUT"] = "PUT";
})(HTTPMethod || (HTTPMethod = {}));
function addTrailingSlash(str) {
    if (str.endsWith('/'))
        return str;
    return str + '/';
}
class APIRequest {
    constructor() {
        this.anonymous = false;
    }
    get response() {
        if (!this._response) {
            this._response = this.task.then(({ status, data }) => {
                try {
                    data = this.parse(data);
                }
                catch (e) { }
                if (status === 'common_OK')
                    return data;
                return this.handleError(status, data);
            });
        }
        return this._response;
    }
    get meta() {
        return this.task.then(({ meta_data }) => meta_data);
    }
    get task() {
        if (!this._task)
            this._task = this.tryTask();
        return this._task;
    }
    parse(data) {
        return data;
    }
    handleError(reason, data) {
        throw { reason, data };
    }
    async tryTask() {
        try {
            return await this.doTask();
        }
        catch (e) {
            throw this.transformAxoisError(e);
        }
    }
    async doTask() {
        const paramsKey = this.method === HTTPMethod.GET ? 'params' : 'data';
        const headers = {
            'Content-Type': this.contentType || 'application/json'
        };
        if (Authentication.token && !this.anonymous)
            headers.Authorization = 'Token ' + Authentication.token;
        return (await Axios({
            baseURL: 'http://test.hashworld.top:12366' + '/apis/',
            url: addTrailingSlash(this.path),
            method: this.method,
            [paramsKey]: this.params,
            headers,
            onUploadProgress: (e) => {
                if (!this.onProgress)
                    return;
                this.onProgress(Math.floor(e.loaded * 100 / e.total));
            }
        })).data;
    }
    transformAxoisError(error) {
        if (error.response === undefined)
            return { reason: APIRequest.Unknown };
        switch (error.response.status) {
            case 401:
                return { reason: APIRequest.Unauthorized };
            case 403:
                if (error.response.data === 'IP blocked')
                    return { reason: APIRequest.IPBlocked };
                else if (error.response.data === 'Captcha Required')
                    return { reason: APIRequest.CaptchaRequired };
            default:
                return { reason: APIRequest.Unknown };
        }
    }
}
APIRequest.Unauthorized = 'top.hashfuture.errors.network.unauthorized';
APIRequest.IPBlocked = 'top.hashfuture.errors.network.ip-blocked';
APIRequest.CaptchaRequired = 'top.hashfuture.errors.network.captcha-required';
APIRequest.Unknown = 'top.hashfuture.errors.network.unknown';

const parseAccount = (data) => {
    const { id, username, phone } = data;
    let type = AccountType.Unverified;
    if (data.personal_kyc !== null)
        type = AccountType.Personal;
    if (data.company_kyc !== null)
        type = AccountType.Enterprise;
    return { id, username, phone, type };
};

class Login extends APIRequest {
    constructor(phone, password) {
        super();
        this.path = 'accounts/token';
        this.method = HTTPMethod.POST;
        this.params = { phone, password };
    }
    parse({ token, account }) {
        return { token, account: parseAccount(account) };
    }
}

class Register extends APIRequest {
    constructor(params) {
        super();
        this.path = 'accounts/user';
        this.method = HTTPMethod.POST;
        this.params = {
            phone: params.phone,
            password: params.password,
            code: params.smsCode,
            country_code: params.countryCode
        };
    }
    parse({ token, account }) {
        return { token, account: parseAccount(account) };
    }
}

class SendSms extends APIRequest {
    constructor(phone) {
        super();
        this.path = 'accounts/sms_code';
        this.method = HTTPMethod.POST;
        this.params = { phone };
    }
}

const rule = (c) => ({
    name: c.name,
    licenseNumber: c.license_number,
    capital: c.capital,
    imageUrlTmp: c.image_url_tmp,
    personName: c.person_name,
    IDNumber: c.ID_number,
    personUrlTmp: c.person_url_tmp,
    changeTime: c.change_time,
    status: c.status,
    accountId: c.account_id
});
const getDataByRule = (data) => {
    return rule(data);
};
class CompanyIndentification extends APIRequest {
    constructor() {
        super();
        this.path = '/accounts/kyc/company_kyc/';
        this.method = HTTPMethod.GET;
    }
    parse(data) {
        return getDataByRule(data);
    }
}

const rule$1 = (c) => ({
    name: c.name,
    shortName: c.short_name,
    address: c.address,
    phone: c.phone,
    impressionUrlTmp: c.impression_url_tmp,
    introduction: c.introduction,
    serviceRange: c.service_range,
    serviceFee: c.service_fee,
    certificationUrlTmp: c.certification_url_tmp,
    changeTime: c.change_time,
    status: c.status,
    accountId: c.account_id,
    tbdProtocolUrlTmp: c.tbd_protocol_url_tmp
});
const getDataByRule$1 = (data) => {
    return rule$1(data);
};
class ServiceIndentification extends APIRequest {
    constructor() {
        super();
        this.path = '/accounts/kyc/servant_kyc/';
        this.method = HTTPMethod.GET;
    }
    parse(data) {
        return getDataByRule$1(data);
    }
}

const rule$2 = (c) => ({
    id: c.id,
    name: c.name,
    address: c.address,
    phone: c.phone,
    impressionUrl: c.impression_url,
    introduction: c.introduction,
    legalPersonName: c.legal_person_name,
    legalPersonId: c.legal_person_id,
    legalPersonUrl: c.legal_person_url,
    serviceArea: c.service_area,
    resourceUrl: c.resource_url,
    rank: c.rank
});
const getDataByRule$2 = (data) => {
    return rule$2(data);
};
class ServiceIndentificationConfirm extends APIRequest {
    constructor() {
        super();
        this.path = '/accounts/servant_list/';
        this.method = HTTPMethod.GET;
    }
    parse(data) {
        return getDataByRule$2(data);
    }
}

const rule$3 = (c) => ({
    realName: c.real_name,
    IDNumber: c.ID_number,
    imageUrlTmp: c.image_url_tmp,
    changeTime: c.change_time,
    status: c.status,
    accountId: c.account_id
});
const getDataByRule$3 = (data) => {
    return rule$3(data);
};
class PersonalIndentification extends APIRequest {
    constructor() {
        super();
        this.path = '/accounts/kyc/personal_kyc/';
        this.method = HTTPMethod.GET;
    }
    parse(data) {
        return getDataByRule$3(data);
    }
}

const rule$4 = (c) => ({
    walletStatus: c.wallet_status,
    errorInfo: c.error_info
});
const getDataByRule$4 = (data) => {
    return rule$4(data);
};
class LockWallet extends APIRequest {
    constructor(params) {
        super();
        this.path = '/accounts/bind_wallet/';
        this.method = HTTPMethod.POST;
        this.params = params;
    }
    parse(data) {
        return getDataByRule$4(data);
    }
}

const rule$5 = (c) => {
    const ruleOfValue = {
        coin: 'coin',
        coinAmount: 'coin_amount',
        frozenAmount: 'frozen_amount',
    };
    var b = {};
    Object.keys(ruleOfValue).forEach((key) => {
        let _value = '';
        _value = c[ruleOfValue[key]] === undefined ? 'undefined' : c[ruleOfValue[key]];
        b[key] = _value;
    });
    return b;
};
const getDataByRule$5 = (data) => {
    return data.map((item) => rule$5(item));
};
class WalletRemain extends APIRequest {
    constructor(params) {
        super();
        this.path = '/coin/wallet/';
        this.method = HTTPMethod.GET;
        this.params = params;
    }
    parse(data) {
        return getDataByRule$5(data);
    }
}

const rule$6 = (c) => {
    const ruleOfValue = {
        time: 'time',
        type: 'type',
        coinName: 'coin_name',
        amount: 'amount',
    };
    var b = {};
    Object.keys(ruleOfValue).forEach((key) => {
        let _value = '';
        _value = c[ruleOfValue[key]] === undefined ? 'undefined' : c[ruleOfValue[key]];
        b[key] = _value;
    });
    return b;
};
const getDataByRule$6 = (data) => {
    return data.map((item) => rule$6(item));
};
class transactionRecord extends APIRequest {
    constructor(params) {
        super();
        this.path = '/coin/transaction_record/';
        this.method = HTTPMethod.GET;
        this.params = params;
    }
    parse(data) {
        return getDataByRule$6(data);
    }
}

class GetCountryCodes extends APIRequest {
    constructor() {
        super(...arguments);
        this.path = 'accounts/kyc/countries';
        this.method = HTTPMethod.GET;
        this.anonymous = true;
    }
    parse(data) {
        return data.map(d => {
            d.name = d.chs;
            delete d.chs;
            return d;
        });
    }
}

class GetUserInfo extends APIRequest {
    constructor() {
        super(...arguments);
        this.path = 'accounts/user';
        this.method = HTTPMethod.GET;
    }
    parse(account) {
        return parseAccount(account);
    }
}

class GetCertification extends APIRequest {
    constructor(type) {
        super();
        this.path = 'accounts/kyc/personal_kyc';
        this.method = HTTPMethod.GET;
        switch (type) {
            case AccountType.Personal:
                this.path = 'accounts/kyc/personal_kyc';
                break;
            case AccountType.Enterprise:
                this.path = 'accounts/kyc/company_kyc';
                break;
            default:
                throw { reason: GetCertification.InvalidType };
        }
    }
    parse({ real_name, ID_number, status }) {
        let _status;
        switch (status) {
            case 'examining':
                _status = CertificationInfo.Status.Waiting;
                break;
            case 'approve':
                _status = CertificationInfo.Status.Approved;
                break;
            case 'not_approve':
                _status = CertificationInfo.Status.Rejected;
                break;
        }
        return {
            name: real_name,
            idNumber: ID_number,
            status: _status
        };
    }
}
GetCertification.InvalidType = 'top.hashfuture.errors.network.get-certification.invalid-type';

class SubmitPersonalCertification extends APIRequest {
    constructor(data) {
        super();
        this.path = 'accounts/kyc/personal_kyc';
        this.method = HTTPMethod.POST;
        this.params = {
            real_name: data.name,
            ID_number: data.idNumber,
            image_url: data.photos,
            country_id: data.country
        };
    }
}

class UploadFile extends APIRequest {
    constructor({ file, isPublic = false, relativePath = 'asset', onProgress = undefined }) {
        super();
        this.method = HTTPMethod.POST;
        this.path = isPublic ? 'oss/upload_public_file' : 'oss/upload_private_file';
        const data = new FormData();
        data.append('relative_path', (isPublic ? 'uploadfiles' : 'concealfiles') + '/' + relativePath);
        data.append('file_content', file);
        this.params = data;
        this.contentType = 'multipart/form-data';
        this.onProgress = onProgress;
    }
    parse({ url }) {
        return url;
    }
}

export { APIRequest, HTTPMethod, Login, Register, SendSms, CompanyIndentification, LockWallet, ServiceIndentification, ServiceIndentificationConfirm, PersonalIndentification, WalletRemain, transactionRecord as TransactionRecord, GetCountryCodes as GetCountries, GetUserInfo, GetCertification, SubmitPersonalCertification, UploadFile };
