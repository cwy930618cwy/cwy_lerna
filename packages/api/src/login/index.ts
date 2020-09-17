import APIRequest, { HTTPMethod } from "../api-request";
import { Account } from "models";
export default class Login extends APIRequest<any> {
  path = "/user/login";
  method = HTTPMethod.POST;
  constructor(username: string, password: string) {
    super();
    this.params = { username, password };
  }
  parse(token: any) {
    console.log("api=------", token);
    return token;
  }
}
