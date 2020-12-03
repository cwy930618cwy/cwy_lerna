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

export { AccountType, CertificationInfo };
