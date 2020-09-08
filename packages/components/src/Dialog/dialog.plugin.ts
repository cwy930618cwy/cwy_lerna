import Vue, {
  FunctionalComponentOptions,
  Component as VueComponent,
} from "vue";
import Dialogs from "./Dialog.vue";
import VueJSModal from "vue-js-modal";

type DialogParams = {
  title: string;
  buttons: string[];
};

type Partial<T> = {
  [k in keyof T]?: T[k];
};

const makeDialog = (
  params: DialogParams & { body?: VueComponent },
  close: Function,
  onButtonClick: Function
): {
  componentOptions: FunctionalComponentOptions<Vue>;
  update: (params: Partial<DialogParams>) => void;
} => {
  const props = {};
  (Vue as any).util.defineReactive(props, "title", params.title);
  (Vue as any).util.defineReactive(props, "buttons", params.buttons);
  return {
    update: async (newProps) => {
      Object.assign(props, newProps);
    },
    componentOptions: {
      // whether this component is functional or not is an implementation detail
      // so it is not untested, neither should be.
      // as long as the rendered markup remains same, the test will pass
      functional: true,
      render(h) {
        return h(
          Dialogs,
          { props, on: { close, "button-click": onButtonClick } },
          [h(params.body)]
        );
      },
    },
  };
};

const genUID = (function() {
  let uid = 0;
  return () => uid++;
})();

export default {
  install(V: typeof Vue) {
    V.use(VueJSModal, { dynamic: true, injectModalsContainer: true });
    V.prototype.$showDialog = function({
      title = "",
      buttons = [] as string[],
      body = undefined as VueComponent | undefined,
      onButtonClick = () => {},
    } = {}) {
      const name = "__dialog_" + genUID();
      const close = () => this.$modal.hide(name);
      const { update, componentOptions } = makeDialog(
        { title, buttons, body },
        close,
        onButtonClick
      );
      this.$modal.show(
        componentOptions,
        {},
        { width: 420, height: "auto", name }
      );
      return update;
    };
  },
};
