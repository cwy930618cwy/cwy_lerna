<template>
  <div class="content">
    <!----------------背景图------------------>
    <div class="bg">
      <div class="cent">
        <div class="china">
          <span>韩文晶</span>
          <span>个人作品网站</span>
        </div>
        <div class="english">PERSONAL WORKS WEBSITE</div>
      </div>
      <div class="arrow"></div>
    </div>

    <!----------------个人资料介绍------------------->
    <div class="main-box">
      <div class="main">
        <Exchange :personDetail="personDetail"/>
        <div class="right">
          <div class="center">
            <h2>简介</h2>
            <h1>韩文晶的简单介绍</h1>
            <div class="main_arrow"></div>
          </div>
        </div>

      </div>
    </div>

    <!-----------------不知道干嘛的图片-------------------->
    <div class="superpic"></div>

    <!-----------------专题-------------------->
    <div class="special">
      <div class="card">
        <div class="date">20/11</div>
        <div class="detail">
          <h1>哈弗汽车广州车展专题</h1>
          <h2>2020.11.20</h2>
          <h2>11月20日，第十八届广州国际汽车展览会在广
            州琶洲中国进出口商品交易会馆正式开幕。长
            城汽车携旗下四大品牌哈弗、欧拉、长城皮卡
            及WEY联袂出击，以文化焕新后的全新姿态打
            造本届广州车展最具人气展馆。</h2>
          <div class="main_arrow"></div>
        </div>
      </div>
      <div class="card">
        <div class="date">20/11</div>
        <div class="detail">
          <h1>哈弗汽车广州车展专题</h1>
          <h2>2020.11.20</h2>
          <h2>11月20日，第十八届广州国际汽车展览会在广
            州琶洲中国进出口商品交易会馆正式开幕。长
            城汽车携旗下四大品牌哈弗、欧拉、长城皮卡
            及WEY联袂出击，以文化焕新后的全新姿态打
            造本届广州车展最具人气展馆。</h2>
          <div class="main_arrow"></div>
        </div>
      </div>
      <div class="arrow"></div>
      <div class="more">查看更多</div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Exchange from './components/exchange.vue'

@Component({
  components: { Exchange }
})
export default class Content extends Vue {
  personDetail = [
    {
      title: '工作经验',
      detail: [
        {
          title: '青岛xx文化传播有限公司',
          date: '2019.8 -2020.07',
          content: `点 负责啊绝对是看见的 是假的 绝对是
            刷卡机多久 是多久啊的的撒看见的 的
            动手动脚的时间点啊上睡觉啊 多少啊
            的撒打算的大大大大大大说啊说的对的
            动手动脚啊肯德基嗲说啊
            的撒加到几点`
        },
        {
          title: '青岛xx文化传播有限公司',
          date: '2019.8 -2020.07',
          content: `点 负责啊绝对是看见的 是假的 绝对是
            刷卡机多久 是多久啊的的撒看见的 的
            动手动脚的时间点啊上睡觉啊 多少啊
            的撒打算的大大大大大大说啊说的对的
            动手动脚啊肯德基嗲说啊
            的撒加到几点`
        }
      ]
    },
    {
      title: '作品集',
      detail: [
        {
          title: '青岛xx文化传播有限公司',
          date: '2019.8 -2020.07',
          content: `点 负责啊绝对是看见的 是假的 绝对是
            刷卡机多久 是多久啊的的撒看见的 的
            动手动脚的时间点啊上睡觉啊 多少啊
            的撒打算的大大大大大大说啊说的对的
            动手动脚啊肯德基嗲说啊
            的撒加到几点`
        },
        {
          title: '青岛xx文化传播有限公司',
          date: '2019.8 -2020.07',
          content: `点 负责啊绝对是看见的 是假的 绝对是
            刷卡机多久 是多久啊的的撒看见的 的
            动手动脚的时间点啊上睡觉啊 多少啊
            的撒打算的大大大大大大说啊说的对的
            动手动脚啊肯德基嗲说啊
            的撒加到几点`
        }
      ]
    },
    {
      title: '个人简历',
      detail: [
        {
          title: '青岛xx文化传播有限公司',
          date: '2019.8 -2020.07',
          content: `点 负责啊绝对是看见的 是假的 绝对是
            刷卡机多久 是多久啊的的撒看见的 的
            动手动脚的时间点啊上睡觉啊 多少啊
            的撒打算的大大大大大大说啊说的对的
            动手动脚啊肯德基嗲说啊
            的撒加到几点`
        },
        {
          title: '青岛xx文化传播有限公司',
          date: '2019.8 -2020.07',
          content: `点 负责啊绝对是看见的 是假的 绝对是
            刷卡机多久 是多久啊的的撒看见的 的
            动手动脚的时间点啊上睡觉啊 多少啊
            的撒打算的大大大大大大说啊说的对的
            动手动脚啊肯德基嗲说啊
            的撒加到几点`
        }
      ]
    }
  ]
}

</script>


<style lang="scss">
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.content{
  .bg{
    height: dim(800);
    width: 100%;
    background: darkgray;
    // background: url('../../assets/main.jpg') no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cent{
      margin-top: 240px;
      .china{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        flex-direction: column;
        width: dim(400);
        height: dim(200);
        background: url('../../assets/home_border.png') no-repeat;
        background-position: center center;
        background-size: cover;
      }
      .english{
        font-size: dim(28);
        text-align: center;
        font-family: PingFangSC-Thin, PingFang SC;
      }
    }
    .arrow{
      width: dim(28);
      height: dim(28);
      margin-top: dim(160);
      background: url('../../assets/next.png') no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
  .main-box{
    background: #F3F3F3;
    width: 100%;
    .main{
      width: dim(1200);
      height: dim(840);
      display: flex;
      justify-content: flex-end;
      padding-top: dim(200);
      overflow: hidden;
      margin: 0 auto;
      .right{
        width: dim(384);
        height: dim(533);
        background: aliceblue;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        .center{
          width: dim(280);
          height: dim(150);
          background: #F3F3F3;
          padding-left: dim(30);
        }
      }
    }
  }

  .superpic{
    width: 100%;
    height: dim(400);
    background: antiquewhite;
  }

  .special{
    display: flex;
    flex-direction: column;
    align-items: center;
    .card{
      width: dim(985);
      height: dim(520);
      background: #9F7C58;
      position: relative;
      margin-top: dim(90);
      .date{
        margin: dim(30) 0 0 dim(30);
        font-size: dim(40);
      }
      .detail{
        width: dim(400);
        height: dim(324);
        background: #FFFFFF;
        box-shadow: 0px dim(2) dim(4) 0px rgba(0, 0, 0, 0.2);
        padding: dim(30);
        box-sizing: border-box;
        position: absolute;
        right: dim(-200);
      }
    }
    .arrow{
      width: dim(28);
      height: dim(28);
      margin-top: dim(30);
      background: url('../../assets/next.png') no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .more{
      width: dim(250);
      height: dim(50);
      border: dim(1) solid #E28E28;
      color: #E28E28;
      font-size: dim(24);
      text-align: center;
      line-height: dim(50);
      margin-top: dim(10);
    }
  }
  
  h1{
    font-size: dim(24);
    color: #000000;
    margin: dim(10) 0;
  }
  h2{
    font-size: dim(16);
    color: #666666;
    margin: dim(10) 0;
  }
  h3{
    font-size: dim(16);
    color: #000000;
    margin: dim(10) 0;
  }

}
</style>
