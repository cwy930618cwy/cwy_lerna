import { getModule, Module as _Module } from "vuex-module-decorators";
import { onStore } from "./store";
import { ModuleOptions } from "vuex-module-decorators/dist/types/moduleoptions";

export function attachStaticAccessor<M extends { new (...args: any[]): unknown }>(moduleClass: M): M & InstanceType<M> {
  onStore((s: any) => {
    const _static = getModule(moduleClass as any, s)
    Object.getOwnPropertyNames(_static).forEach(key => {
      Object.defineProperty(moduleClass, key, Object.getOwnPropertyDescriptor(_static, key)!)
    })
  })
  return moduleClass as any
}

export function Module(ctor: Function): void
export function Module(options: ModuleOptions): ClassDecorator
export function Module(options: ModuleOptions | Function) {
  if (typeof options === 'function') {
    return (_Module as any)({ name: options.name })(options)
  } else {
    return (ctor: Function) => (_Module as any)({ name: ctor.name, ...options })(ctor)
  }
}