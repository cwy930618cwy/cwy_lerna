import { AsyncUsecase } from '../usecase';
export default class GetCountryCodes implements AsyncUsecase<{
    id: number;
    name: string;
    code: number;
}[]> {
    execute(): Promise<import("models/lib/country").default[]>;
}
