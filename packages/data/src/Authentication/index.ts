import { VuexModule, Mutation } from 'vuex-module-decorators'
import { attachStaticAccessor, Module } from '../utils';
import { Account, AccountType } from 'models'

@Module
class Authentication extends VuexModule {
  token: string | null = null
  account: Account | null = null
  private static readonly tokenKey = 'hashfuture-token'

  @Mutation saveToken(token: string) {
    this.token = token
    localStorage.setItem(Authentication.tokenKey, JSON.stringify({
      value: token,
      expire: Date.now() + 7 * 24 * 3600 * 1000
    }))
  }
  @Mutation deleteToken() {
    this.token = null
    localStorage.removeItem(Authentication.tokenKey)
  }
  @Mutation saveAccount(account: Account) { this.account = account }
  @Mutation updateAccountType(type: AccountType) { this.account && (this.account.type = type) }

  constructor(module: any) {
    super(module)
    const token = localStorage.getItem(Authentication.tokenKey)
    if (token) {
      const { value, expire } = JSON.parse(token)
      if (expire > Date.now()) this.token = value
    }
  }
}

export default attachStaticAccessor(Authentication)
