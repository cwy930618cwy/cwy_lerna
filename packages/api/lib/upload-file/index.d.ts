import APIRequest, { HTTPMethod } from "../api-request";
export default class UploadFile extends APIRequest<string> {
    path: string;
    method: HTTPMethod;
    constructor({ file, isPublic, relativePath, onProgress }: {
        file: File;
        isPublic?: boolean;
        relativePath?: string;
        onProgress?: (_: number) => void;
    });
    parse({ url }: any): any;
}
