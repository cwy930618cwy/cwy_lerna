import { VuexModule } from 'vuex-module-decorators';
import { Account, AccountType } from 'models';
declare class Authentication extends VuexModule {
    token: string | null;
    account: Account | null;
    private static readonly tokenKey;
    saveToken(token: string): void;
    deleteToken(): void;
    saveAccount(account: Account): void;
    updateAccountType(type: AccountType): void;
    constructor(module: any);
}
declare const _default: typeof Authentication & Authentication;
export default _default;
