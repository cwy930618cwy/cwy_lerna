import { shallowMount, mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button.vue", () => {
  const defaultProps = {
    disabled: false,
    loading: false,
    theme: "light-blue",
  };

  const shallowMountWithPartialProps = (props?: any) =>
    shallowMount(Button, {
      propsData: {
        ...defaultProps,
        ...props,
      },
    });

  it("通过传递不同的theme， class的类型也动态改变", () => {
    const wrapperLightBlue = shallowMountWithPartialProps({
      theme: "light-blue",
    });
    expect(wrapperLightBlue.classes()).toContain("button--theme-light-blue");
    const wrapperwhite = shallowMountWithPartialProps({ theme: "white" });
    expect(wrapperwhite.classes()).toContain("button--theme-white");
    const wrapperDarkBlue = shallowMountWithPartialProps({
      theme: "dark-blue",
    });
    expect(wrapperDarkBlue.classes()).toContain("button--theme-dark-blue");
  });
  it("emits event when the button is clicked", () => {
    const click = jest.fn();
    const listeners = { click };
    const wrapper = shallowMount(Button, {
      listeners,
    });
    wrapper.trigger("click");
    expect(click).toHaveBeenCalled();
  });
  it("button has disabled attribute", () => {
    const wrapper = shallowMountWithPartialProps({ disabled: true });
    const button = wrapper.find("button");
    expect((button.element as HTMLButtonElement).disabled).toBe(true);
  });

  it("button slot 是否可以插入", () => {
    const wrapper = shallowMount(Button, {
      propsData: { loading: false },
      slots: { default: "<div>slot content</div>" },
    });
    expect(wrapper.find(".button--text").element.innerHTML).toEqual(
      "<div>slot content</div>"
    );
  });

  it("do not show button slot  when loading is true", () => {
    const wrapper = shallowMount(Button, {
      propsData: { loading: true },
      slots: { default: "<div>slot content</div>" },
    });
    expect(wrapper.find(".button--text").text()).toBe("");
  });
  it("当loading是true的时候class的名字为button--loading", () => {
    const wrapper = shallowMount(Button, {
      propsData: { loading: true },
    });
    expect(wrapper.find(".button--loading").exists()).toBe(true);
  });
  it("传入不同的size对应相应的class", () => {
    const wrapperlarge = shallowMountWithPartialProps();
    expect(wrapperlarge.find(".button--size-large").exists()).toBe(true);
    const wrappersmall = shallowMountWithPartialProps({ size: "small" });
    expect(wrappersmall.find(".button--size-small").exists()).toBe(true);
  });
});
