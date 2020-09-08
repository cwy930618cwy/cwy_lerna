import { AsyncUsecase } from '../usecase';
export default class SubmitPersonalCertification implements AsyncUsecase {
    name: string;
    idNumber: string;
    idPhotos: string[];
    execute(): Promise<void>;
}
