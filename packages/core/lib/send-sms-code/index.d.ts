import { AsyncUsecase } from "../usecase";
export default class SendSmsCode implements AsyncUsecase<{
    exist: boolean;
}> {
    phone: string;
    execute(): Promise<{
        exist: boolean;
    }>;
}
