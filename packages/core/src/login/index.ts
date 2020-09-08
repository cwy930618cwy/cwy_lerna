import { AsyncUsecase } from "../usecase";

import { Login as LoginAPI } from "api";
import { Authentication } from "data";

export default class Login implements AsyncUsecase {
  phone = "";

  password = "";

  async execute() {
    const api = new LoginAPI(this.phone, this.password);
    const { token, account } = await api.response;
    Authentication.saveToken(token);
    Authentication.saveAccount(account);
  }
}
