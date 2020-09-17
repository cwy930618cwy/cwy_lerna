import { Usecase } from "core";
import Vue from "vue";

Vue.config.optionMergeStrategies.validations = function(a: any, b: any) {
  return Object.assign({}, a, b);
};

type Ctor<T> = { new (): T };

type VueClass<V> = {
  new (...args: any[]): V & Vue;
} & typeof Vue;

export default function UCMixin<T extends Usecase>(usecase: {
  new (): T;
}): VueClass<
  T & {
    execute<U>(
      usecase: Ctor<Usecase<U>>,
      propertyMapping?: { [k in keyof T]?: any } & ThisType<any>
    ): U;
  }
> {
  return {
    data() {
      return new usecase();
    },
    validations: (usecase as any).validations,
    methods: {
      execute(
        aUsecase: Ctor<Usecase>,
        propertyMapping: { [k in keyof T]?: any } & ThisType<any> = {}
      ) {
        console.log("???");
        const obj = new aUsecase();
        Object.keys(obj).forEach(k => {
          if (typeof k === "function") return;
          const mapping = (propertyMapping as any)[k];
          if (mapping) {
            (obj as any)[k] =
              typeof mapping === "function" ? mapping.apply(this) : mapping;
          } else {
            (obj as any)[k] = (this as any)[k];
          }
        });
        console.log("eee");
        return aUsecase.prototype.execute.apply(obj);
      }
    }
  } as any;
}
