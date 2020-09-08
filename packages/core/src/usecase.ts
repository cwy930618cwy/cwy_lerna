export default interface Usecase<Output = void> {
  execute (): Output
}

export type AsyncUsecase<Output = void> = Usecase<Promise<Output>>