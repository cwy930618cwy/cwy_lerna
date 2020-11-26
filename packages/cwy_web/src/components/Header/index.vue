<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {  }
  })
export default class Header extends Vue{
  title = '技术研究分享'
}

</script>

<style lang="scss" type="text/css" scoped>
.header{
  color: #66696b;
}
</style>
