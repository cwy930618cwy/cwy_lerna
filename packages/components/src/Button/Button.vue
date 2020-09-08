<template>
  <button
    class="button"
    :class="[`button--theme-${theme}`, `button--size-${size}`]"
    v-on="$listeners"
    :disabled="disabled"
  >
    <touch-ripple
      :speed="1"
      :opacity="rippleOpacity"
      :color="rippleColor"
      transition="ease"
    >
      <div class="button--text" :class="{ 'button--loading': loading }">
        <slot v-if="!loading"></slot>
      </div>
    </touch-ripple>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { touchRipple } from "vue-touch-ripple";

@Component({
  components: { touchRipple },
})
export default class Button extends Vue {
  @Prop({
    default: "light-blue",
    validator: (theme) => ["light-blue", "white", "dark-blue"].includes(theme),
  })
  theme!: "light-blue" | "white" | "dark-blue";

  @Prop({
    default: false,
  })
  disabled!: boolean;

  @Prop({
    default: false,
  })
  loading!: boolean;

  @Prop({
    default: "large",
  })
  size!: "large" | "small";

  get rippleColor() {
    return {
      "light-blue": "#FFFFFF",
      white: "#6236FF",
      "dark-blue": "#FFFFFF",
    }[this.theme];
  }
  get rippleOpacity() {
    if (this.disabled) return 0.00001;
    return {
      "light-blue": 0.1,
      white: 0.05,
      "dark-blue": 0.1,
    }[this.theme];
  }
}
</script>

<style lang="scss">
@import "../common/functions.scss";
@import "../common/mixins.scss";

.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
.button {
  @include font-regular;
  padding: 0 !important;
  position: relative;
  border-radius: dim(4);
  font-size: dim(16);
  outline: none;
  border: none;
  cursor: pointer;
}
.button--loading::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: calc(50% - #{dim(10)});
  top: calc(50% - #{dim(10)});
  width: dim(20);
  height: dim(20);
  animation: rotate-forever 1.5s linear infinite;
  border: dim(1) solid transparent;
  border-radius: 50%;
  border-left-color: rgba(255, 255, 255, 1);
}
.button--size-large {
  width: 100%;
  height: dim(40);
}
.button--size-small {
  width: 100%;
  height: dim(28);
  font-size: dim(12);
}
.button--theme-light-blue {
  color: rgba(255, 255, 255, 1);
  background: #6236ff;
}
@keyframes rotate-forever {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.button--theme-white {
  border: 1px solid rgba(106, 42, 255, 1);
  background: #ffffff;
  color: #6236ff;
}
.button--theme-dark-blue {
  background: #2e2b80;
  color: #ffffff;
}
.button--text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-touch-ripple {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
