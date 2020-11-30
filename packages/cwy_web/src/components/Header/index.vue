<template>
  <div class="cwy-header">
    <div class="left">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="right">
      <!-- <cwy-menu :default-active="activeIndex" class="cwy-menu-demo" mode="horizontal" @select="handleSelect">
        <cwy-menu-item :index="item.index" v-for="item in menuList" :key="item.index">{{ item.name }}</cwy-menu-item>
      </cwy-menu> -->
      <cwy-menu :menuList="menuList"/>
      <cwy-divider></cwy-divider>
      <div class="icon" v-for="item in iconList" :key="item">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: { }
})
export default class cwyHeader extends Vue{
  @Prop({ type: String, default: '' }) private text?: string
  title = '技术研究分享'
  activeIndex = '1'

  menuList = [
    {
      index: '1',
      name: '主页'
    },
    {
      index: '2',
      name: '作品'
    },
    {
      index: '3',
      name: '绘画'
    },
    {
      index: '4',
      name: '联系'
    }
  ]

  iconList = [require('@/assets/search.png'), require('@/assets/privacy.png'), require('@/assets/login.png')]
}

</script>

<style lang="scss" scoped>
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.cwy-header{
  width: dim(1200);
  margin: 0 auto;
  margin-top: dim(46);
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .left{
    img{
      height: dim(54);
      width: dim(50);
    }
  }
  .right{
    display: flex;
    align-items: center;
  }
  .icon{
    height: dim(20);
    width: dim(20);
    margin: 0 dim(20);
    img{
      height: 100%;
      width: 100%;
    }
  }
}
</style>
