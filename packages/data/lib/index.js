import { getModule, Module, VuexModule, Mutation } from 'vuex-module-decorators';

const listeners = [];
function onStore(callback) {
    listeners.push(callback);
}
async function setStore(store) {
    listeners.forEach(f => f(store));
}

function attachStaticAccessor(moduleClass) {
    onStore((s) => {
        const _static = getModule(moduleClass, s);
        Object.getOwnPropertyNames(_static).forEach(key => {
            Object.defineProperty(moduleClass, key, Object.getOwnPropertyDescriptor(_static, key));
        });
    });
    return moduleClass;
}
function Module$1(options) {
    if (typeof options === 'function') {
        return Module({ name: options.name })(options);
    }
    else {
        return (ctor) => Module({ name: ctor.name, ...options })(ctor);
    }
}

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

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Authentication_1;
let Authentication = Authentication_1 = class Authentication extends VuexModule {
    constructor(module) {
        super(module);
        this.token = null;
        this.account = null;
        const token = localStorage.getItem(Authentication_1.tokenKey);
        if (token) {
            const { value, expire } = JSON.parse(token);
            if (expire > Date.now())
                this.token = value;
        }
    }
    saveToken(token) {
        this.token = token;
        localStorage.setItem(Authentication_1.tokenKey, JSON.stringify({
            value: token,
            expire: Date.now() + 7 * 24 * 3600 * 1000
        }));
    }
    deleteToken() {
        this.token = null;
        localStorage.removeItem(Authentication_1.tokenKey);
    }
    saveAccount(account) { this.account = account; }
    updateAccountType(type) { this.account && (this.account.type = type); }
};
Authentication.tokenKey = 'hashfuture-token';
__decorate([
    Mutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Authentication.prototype, "saveToken", null);
__decorate([
    Mutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Authentication.prototype, "deleteToken", null);
__decorate([
    Mutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Authentication.prototype, "saveAccount", null);
__decorate([
    Mutation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Authentication.prototype, "updateAccountType", null);
Authentication = Authentication_1 = __decorate([
    Module$1,
    __metadata("design:paramtypes", [Object])
], Authentication);
var index = attachStaticAccessor(Authentication);

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Meta = class Meta extends VuexModule {
    constructor() {
        super(...arguments);
        this.countries = [];
    }
    saveCountryCodes(countries) { this.countries = countries; }
};
__decorate$1([
    Mutation,
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Array]),
    __metadata$1("design:returntype", void 0)
], Meta.prototype, "saveCountryCodes", null);
Meta = __decorate$1([
    Module$1
], Meta);
var Meta$1 = attachStaticAccessor(Meta);

export { index as Authentication, Meta$1 as Meta, setStore };
