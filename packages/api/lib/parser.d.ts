export default interface Parser<T> {
    (input: any): T;
}
