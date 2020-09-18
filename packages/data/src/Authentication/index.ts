import { VuexModule, Mutation } from "vuex-module-decorators";
import { attachStaticAccessor, Module } from "../utils";
import { Account, AccountType } from "models";

@Module
class Authentication extends VuexModule {
  token: string | null = "66666";
  account: Account | null = null;
  private static readonly tokenKey = "hashfuture-token";

  @Mutation saveToken(token: string) {
    this.token = token;
    console.log("auth---------------", this.token);
  }
  @Mutation deleteToken() {
    this.token = null;
    localStorage.removeItem(Authentication.tokenKey);
  }
  @Mutation saveAccount(account: Account) {
    this.account = account;
  }
  @Mutation updateAccountType(type: AccountType) {
    this.account && (this.account.type = type);
  }

  constructor(module: any) {
    super(module);
  }
}

export default attachStaticAccessor(Authentication);
