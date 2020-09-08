import idValidator from 'id-validator';
import { helpers, required, numeric, alphaNum } from 'vuelidate/lib/validators';
import { Login, Register, SendSms, CompanyIndentification, ServiceIndentification, ServiceIndentificationConfirm, PersonalIndentification, LockWallet, GetCountries, WalletRemain, TransactionRecord, GetUserInfo, APIRequest, GetCertification, SubmitPersonalCertification } from 'api';
import { Authentication, Meta } from 'data';

function validate(name, validator, message) {
    return function (ctor, prop) {
        ctor.constructor.validations = ctor.constructor.validations || {};
        ctor.constructor.validations[prop] = ctor.constructor.validations[prop] || {};
        ctor.constructor.validations[prop][name] = (...args) => validator(...args);
        ctor.constructor.validations[prop][name].message = message;
    };
}

const validator = new idValidator();
function chineseIdNumber (message) {
    return validate('chineseIdNumber', validator.isValid.bind(validator), message);
}

function required$1(message) {
    return validate('required', required, message);
}
function numeric$1(message) {
    return validate('numeric', numeric, message);
}
function alphaNum$1(message) {
    return validate('alphaNum', alphaNum, message);
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Login$1 {
    constructor() {
        this.phone = '';
        this.password = '';
    }
    async execute() {
        const api = new Login(this.phone, this.password);
        const { token, account } = await api.response;
        Authentication.saveToken(token);
        Authentication.saveAccount(account);
    }
}
__decorate([
    required$1('请输入手机号'),
    __metadata("design:type", Object)
], Login$1.prototype, "phone", void 0);
__decorate([
    required$1('请输入密码'),
    __metadata("design:type", Object)
], Login$1.prototype, "password", void 0);

function length(min, max, message) {
    return validate('length', (data) => {
        if (!helpers.req(data))
            return true;
        if (data.length === undefined)
            return false;
        if (max === undefined || typeof max === 'string')
            return data.length === min;
        return min <= data.length && data.length <= max;
    }, typeof max === 'string' ? max : message);
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Register$1 {
    constructor() {
        this.phone = '';
        this.password = '';
        this.smsCode = '';
        this.countryCode = '';
    }
    // TODO:
    // 在execute前应用验证规则，以免UI部分使用usecase时错误使用
    async execute() {
        const { token, account } = await new Register({
            countryCode: this.countryCode,
            phone: this.phone,
            password: this.password,
            smsCode: this.smsCode
        }).response;
        Authentication.saveToken(token);
        Authentication.saveAccount(account);
    }
}
__decorate$1([
    required$1('请输入手机号'),
    __metadata$1("design:type", Object)
], Register$1.prototype, "phone", void 0);
__decorate$1([
    required$1('请输入密码'),
    length(6, 20, '密码为6-20位字母数字'),
    alphaNum$1('密码为6-20位字母数字'),
    __metadata$1("design:type", Object)
], Register$1.prototype, "password", void 0);
__decorate$1([
    required$1('请输入短信验证码'),
    length(6, '短信验证码为6位数字'),
    numeric$1('短信验证码为6位数字'),
    __metadata$1("design:type", Object)
], Register$1.prototype, "smsCode", void 0);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class SendSmsCode {
    constructor() {
        this.phone = '';
    }
    async execute() {
        return new SendSms(this.phone).response;
    }
}
__decorate$2([
    required$1('请输入手机号'),
    __metadata$2("design:type", Object)
], SendSmsCode.prototype, "phone", void 0);

class CompanyIndentification$1 {
    async execute() {
        const api = new CompanyIndentification();
        const company_kyc = await api.response;
        return company_kyc;
    }
}

class ServiceIndentification$1 {
    async execute() {
        const api = new ServiceIndentification();
        const service_kyc = await api.response;
        return service_kyc;
    }
}

class ServiceIndentificationConfirm$1 {
    async execute() {
        const api = new ServiceIndentificationConfirm();
        const service_kyc_api = await api.response;
        service_kyc_api.serviceArea.forEach((item) => {
            item.checked = false;
        });
        return service_kyc_api;
    }
}

class PersonalIndentification$1 {
    async execute() {
        const api = new PersonalIndentification();
        const personal_kyc = await api.response;
        return personal_kyc;
    }
}

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class LockWallet$1 {
    constructor() {
        this.address = '';
        this.params = {
            address: this.address
        };
    }
    async execute() {
        if (this.address == '') {
            return {
                walletStatus: 'false',
                errorInfo: '此处不能为空',
                address: ''
            };
        }
        else {
            const api = await new LockWallet(this.params).response;
            const wal_api = api;
            wal_api.address = this.address;
            return wal_api;
        }
    }
}
__decorate$3([
    required$1('此处不能为空'),
    validate('lengthnone', (val) => val.length < 0, "此处不能为空"),
    __metadata$3("design:type", Object)
], LockWallet$1.prototype, "address", void 0);

class GetCountryCodes {
    async execute() {
        if (Meta.countries.length > 0)
            return Meta.countries;
        const countryCodes = await new GetCountries().response;
        Meta.saveCountryCodes(countryCodes);
        return countryCodes;
    }
}

class WalletRemain$1 {
    constructor() {
        this.params = {
            coin_name: ''
        };
    }
    async execute() {
        const api = new WalletRemain(this.params);
        const WalletRemain_api = await api.response;
        return WalletRemain_api;
    }
}

class TransactionRecordCode {
    constructor() {
        this.params = {
            page: 0,
            pagesize: 20
        };
    }
    async execute() {
        const api = new TransactionRecord(this.params);
        const TransactionRecord_api = await api.response;
        return TransactionRecord_api;
    }
}

class GetUserInfo$1 {
    constructor() {
        this.forceUpdate = false;
    }
    async execute() {
        if (!this.forceUpdate && Authentication.account)
            return Authentication.account;
        try {
            const account = await new GetUserInfo().response;
            Authentication.saveAccount(account);
            return account;
        }
        catch (e) {
            if (e.reason === APIRequest.Unauthorized) {
                Authentication.deleteToken();
            }
            else {
                throw e;
            }
        }
    }
}

class GetCertification$1 {
    constructor() {
        this.type = null;
    }
    execute() {
        if (this.type === null)
            throw { reason: GetCertification$1.InvalidType };
        return new GetCertification(this.type).response;
    }
}
GetCertification$1.InvalidType = 'top.hashfuture.errors.core.get-certification.invalid-type';

var AccountType;
(function (AccountType) {
    AccountType[AccountType["Unverified"] = 0] = "Unverified";
    AccountType[AccountType["Personal"] = 1] = "Personal";
    AccountType[AccountType["Enterprise"] = 2] = "Enterprise";
})(AccountType || (AccountType = {}));
var CertificationInfo;
(function (CertificationInfo) {
    let Status;
    (function (Status) {
        Status[Status["Waiting"] = 0] = "Waiting";
        Status[Status["Approved"] = 1] = "Approved";
        Status[Status["Rejected"] = 2] = "Rejected";
    })(Status = CertificationInfo.Status || (CertificationInfo.Status = {}));
})(CertificationInfo || (CertificationInfo = {}));

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class SubmitPersonalCertification$1 {
    constructor() {
        this.name = '';
        this.idNumber = '';
        this.idPhotos = [];
    }
    async execute() {
        const countries = await new GetCountryCodes().execute();
        await new SubmitPersonalCertification({
            name: this.name,
            idNumber: this.idNumber,
            photos: this.idPhotos,
            country: countries.filter(c => c.name === '中国')[0].id
        }).response;
        Authentication.updateAccountType(AccountType.Personal);
    }
}
__decorate$4([
    required$1('请输入真实姓名'),
    __metadata$4("design:type", Object)
], SubmitPersonalCertification$1.prototype, "name", void 0);
__decorate$4([
    required$1('请输入身份证号'),
    chineseIdNumber('身份证号码格式有误'),
    __metadata$4("design:type", Object)
], SubmitPersonalCertification$1.prototype, "idNumber", void 0);
__decorate$4([
    length(3, '请按提示上传身份证照片'),
    __metadata$4("design:type", Object)
], SubmitPersonalCertification$1.prototype, "idPhotos", void 0);

export { Login$1 as Login, Register$1 as Register, SendSmsCode, CompanyIndentification$1 as CompanyIndentification, LockWallet$1 as LockWallet, ServiceIndentification$1 as ServiceIndentification, ServiceIndentificationConfirm$1 as ServiceIndentificationConfirm, GetCountryCodes as GetCountries, PersonalIndentification$1 as PersonalIndentification, WalletRemain$1 as WalletRemain, TransactionRecordCode as TransactionRecord, GetUserInfo$1 as GetUserInfo, GetCertification$1 as GetCertification, SubmitPersonalCertification$1 as SubmitPersonalCertification };
