<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { isExternal } from '@/utils/validate'
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class SvgIcon extends Vue {
  @Prop({ default: '' }) iconClass!: string
  @Prop({ default: '' }) className?: String

  get isExternal() {
    return isExternal(this.iconClass)
  }

  get iconName() {
    return `#icon-${this.iconClass}`
  }

  get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className
    } else {
      return 'svg-icon'
    }
  }

  get styleExternalIcon() {
    return {
      mask: `url(${this.iconClass}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
