import { ModuleOptions } from "vuex-module-decorators/dist/types/moduleoptions";
export declare function attachStaticAccessor<M extends {
    new (...args: any[]): unknown;
}>(moduleClass: M): M & InstanceType<M>;
export declare function Module(ctor: Function): void;
export declare function Module(options: ModuleOptions): ClassDecorator;
