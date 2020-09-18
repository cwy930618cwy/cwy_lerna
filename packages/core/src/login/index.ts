import { AsyncUsecase } from "../usecase";

import { Login as LoginAPI } from "api";
import { Authentication } from "data";

export default class Login implements AsyncUsecase {
  username = "";
  password = "";

  async execute() {
    const api = new LoginAPI(this.username, this.password);
    const { token } = await api.response;

    console.log("Authentication---", Authentication);
    Authentication.saveToken(token);
    return token;
  }
}
