import { AsyncUsecase } from "../usecase";
export default class Register implements AsyncUsecase {
    phone: string;
    password: string;
    smsCode: string;
    countryCode: string;
    execute(): Promise<void>;
}
