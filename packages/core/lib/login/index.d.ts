import { AsyncUsecase } from "../usecase";
export default class Login implements AsyncUsecase {
    username: string;
    password: string;
    execute(): Promise<any>;
}
