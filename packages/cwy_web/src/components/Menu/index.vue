<template>
  <div class="cwy-menu">
   <div class="cwy-menu-list" v-for="item in menuList" :key="item.index">
     {{ item.name }}
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class cwyMenu extends Vue{
  @Prop({ default: [] }) private menuList?: any

}

</script>

<style lang="scss" scoped>
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.cwy-menu{
  display: flex;
  &-list{
    margin: 0 dim(40);
    font-size: dim(26);
  }
}
</style>
