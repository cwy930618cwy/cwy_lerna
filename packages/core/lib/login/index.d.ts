import { AsyncUsecase } from '../usecase';
export default class Login implements AsyncUsecase {
    phone: string;
    password: string;
    execute(): Promise<void>;
}
