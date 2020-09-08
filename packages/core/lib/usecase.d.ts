export default interface Usecase<Output = void> {
    execute(): Output;
}
export declare type AsyncUsecase<Output = void> = Usecase<Promise<Output>>;
