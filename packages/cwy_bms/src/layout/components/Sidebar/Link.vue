<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal } from "@/utils/validate";

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Link extends Vue {
  @Prop({ default: "" }) to!: string;

  get isExternal() {
    return isExternal(this.to);
  }
  get type() {
    if (this.isExternal) {
      return "a";
    }
    return "router-link";
  }

  linkProps(to: any) {
    if (this.isExternal) {
      return {
        href: to,
        target: "_blank",
        rel: "noopener"
      };
    }
    return {
      to: to
    };
  }
}
</script>
