export interface Account {
    id: number;
    username: string;
    phone: string;
    type: AccountType;
}
export declare enum AccountType {
    Unverified = 0,
    Personal = 1,
    Enterprise = 2
}
export declare namespace CertificationInfo {
    enum Status {
        Waiting = 0,
        Approved = 1,
        Rejected = 2
    }
}
export interface CertificationInfo {
    status: CertificationInfo.Status;
}
export interface PersonalCertificationInfo extends CertificationInfo {
    name: string;
    idNumber: string;
}
export interface EnterpriseCertificationInfo extends CertificationInfo {
    name: string;
    capital: string;
    licenseNumber: string;
    licensePhoto: string;
}
