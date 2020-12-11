<template>
  <div class="cwy-divider">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class cwyDivider extends Vue{
}

</script>

<style lang="scss" type="text/css" scoped>
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.cwy-divider{
  display: inline-block;
  width: dim(1);
  height: 1em;
  margin: 0 dim(8);
  vertical-align: middle;
  position: relative;
  background-color: #dcdfe6;
}
</style>
