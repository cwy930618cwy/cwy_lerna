import { AsyncUsecase } from "../usecase";

import { Login as LoginAPI } from "api";
import { Authentication } from "data";

export default class Login implements AsyncUsecase {
  username = "";

  password = "";

  async execute() {
    const api = new LoginAPI(this.username, this.password);

    console.log("api----", api);

    const token = await api.response;

    console.log("core----", token);

    return token;
  }
}
