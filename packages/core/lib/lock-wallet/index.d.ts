import { AsyncUsecase } from '../usecase';
interface paramsType {
    address: string;
}
interface ruleCoreType {
    walletStatus: string;
    errorInfo: string;
    address: string;
}
export default class LockWallet implements AsyncUsecase<ruleCoreType> {
    address: string;
    params: paramsType;
    execute(): Promise<ruleCoreType>;
}
export {};
