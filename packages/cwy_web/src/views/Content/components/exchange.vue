<template>
  <div class="exchange">
    <div class="left">
      <div class="tabs" @click="handlePerson(item.index)" v-for="item in personIndex" :key="item.title">
        <div class="show" v-if="activeIndex !== item.index ">
          <h1>{{item.title}}</h1>
          <h2>{{item.content}}</h2>
        </div>
        <div class="active" v-else>
          <div class="active__left"></div>
          <div class="active__right">
            <h1>{{item.title}}</h1>
            <h2>{{item.content}}</h2> 
            <div class="main_arrow"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="cont">
      <h1>{{personDetail[activeIndex -1].title}}</h1>
      <div v-for="(item, index) in personDetail[activeIndex -1].detail" :style="{'marginTop': `${60 / 20}rem`}" :key="index">
        <h2>{{item.date}}</h2>
        <h2>{{item.title}}</h2>
        <h3>{{item.content}}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {  }
})
export default class Exchange extends Vue {
  @Prop({ default: {} }) private personDetail?: any

  personIndex = [
    {
      index: 1,
      title: '工作经验',
      content: '工作经历及主要负责内容'
    },
    {
      index: 2,
      title: '作品集总结展示',
      content: '近期作品总结展示集'
    },
    {
      index: 3,
      title: '个人简历展示及下载',
      content: '简历预览及各格式下载'
    }
  ]

  activeIndex = 1

  handlePerson(index: any){
    this.activeIndex = index
  }

}

</script>

<style lang="scss">
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.exchange{
  display: flex;
  width: dim(800);
  justify-content: space-evenly;
  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: dim(500);
    cursor: pointer;
    overflow: hidden;
    width: dim(300);
  }
  .cont{
    width: dim(300);
  }
  .tabs{
    height: dim(100);
    .show{
      height: 100%;
    }
    .active{
      height: 100%;
      display: flex;
      &__left{
        width: dim(4);
        height: dim(106);
        background: #E28E28;
        margin-right: dim(30);
      }
    }
  }
}
</style>
