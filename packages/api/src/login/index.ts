import APIRequest, { HTTPMethod } from "../api-request";
import { Account } from "models";
export default class Login extends APIRequest<{
  token: string;
  account: Account;
}> {
  path = "accounts/token";
  method = HTTPMethod.POST;
  constructor(phone: string, password: string) {
    super();
    this.params = { phone, password };
  }
  parse({ token, account }: any) {
    return { token, account: account };
  }
}
