import { AsyncUsecase } from '../usecase';
import { CertificationInfo, AccountType } from 'models';
export default class GetCertification implements AsyncUsecase<CertificationInfo> {
    static readonly InvalidType = "top.hashfuture.errors.core.get-certification.invalid-type";
    type: AccountType.Personal | AccountType.Enterprise | null;
    execute(): Promise<CertificationInfo>;
}
