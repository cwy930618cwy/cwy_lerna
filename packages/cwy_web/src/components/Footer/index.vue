<template>
  <div class="cwy-footer">
   <div class="left">End</div>
   <div class="right">
     <div class="icon">
       <img src="../../assets/logo.png" alt="">
     </div>
     <div class="split"></div>
     <div class="text">韩文晶个人网站</div>
     <div class="text">Better late than never.</div>
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class cwyFooter extends Vue{
}

</script>

<style lang="scss" scoped>
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.cwy-footer{
  height: dim(500);
  margin-top: dim(60);
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left{
    font-size: dim(260);
  }
  .right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .icon{
      height: dim(54);
      width: dim(50);
      img{
        height: 100%;
        width: 100%;
      }
    }
    .split{
      width: dim(150);
      height: dim(2);
      background: #FFFFFF;
      margin: dim(30) 0 dim(30) 0;
    }
    .text{
      font-family: PingFangSC-Ultralight, PingFang SC;
    }
  }
}
</style>
