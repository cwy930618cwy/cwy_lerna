import { AsyncUsecase } from '../usecase';
import { Account } from 'models';
export default class GetUserInfo implements AsyncUsecase<Account | undefined> {
    forceUpdate: boolean;
    execute(): Promise<Account | undefined>;
}
