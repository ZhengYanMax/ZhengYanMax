<template>
  <div>
    <h1>今日推荐</h1>
    <el-backtop>返回顶部</el-backtop>
    <div class="context">
      <meta name="referrer" content="no-referrer" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <div class="opt" v-for="item in list" :key="item.data.id">
        <div class="type">{{ item.type | theType }}</div>
        <a :href="item.data.href">
          <img :src="item.data.pic" alt="" />
          <div class="story">
            <p>
              {{ item.data.subject }}
            </p>
            <div class="inner">
              <span class="left" v-if="item.data.username">
                {{ item.data.username }}</span
              >
              <span class="left" v-if="item.data.desc">
                {{ item.data.desc }}</span
              >
              <span class="right" v-if="item.data.views">
                {{ item.data.views }}人浏览过</span
              >
              <span class="right" v-if="item.data.price">
                <span class="teshu">{{ item.data.price | thePrice }}</span>
                元起</span
              >
              <span class="right" v-if="item.data.tag">
                {{ item.data.tag }}</span
              >
            </div>
          </div>
        </a>
      </div>
    </div>
    <h1>热门游记与话题</h1>
    <div class="block">
      <el-carousel height="650px" :autoplay="false">
        <el-carousel-item v-for="(myitem, index) in box" :key="index">
          <div class="context">
            <meta name="referrer" content="no-referrer" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <div class="opt" v-for="(item, index) in myitem" :key="index">
              <div class="teshutype">{{ item.type | theType }}</div>
              <a :href="item.url">
                <img :src="item.pic" alt="" />
                <img :src="item.auth.avatar" alt="" id="logo" />
                <div class="comment">
                  <i class="iconfont icon-xiaoxi"></i>
                  <span>{{ item.total_replies }}</span>
                </div>
                <div class="story">
                  <span class="myinner">
                    <span class="left" v-if="item.username">
                      {{ item.username }}</span
                    >
                  </span>
                  <p class="sub">
                    {{ item.subject }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="context">
      <meta name="referrer" content="no-referrer" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <div class="opt" v-for="item in arr" :key="item.id">
        <div class="teshutype">{{ item.type | theType }}</div>
        <a :href="item.url">
          <img :src="item.pic" alt="" />
          <img :src="item.auth.avatar" alt="" id="logo" />
          <div class="comment">
            <i class="iconfont icon-xiaoxi"></i>
            <span>{{ item.total_replies }}</span>
          </div>
          <div class="story">
            <span class="myinner">
              <span class="left" v-if="item.username">
                {{ item.username }}</span
              >
            </span>
            <p class="sub">
              {{ item.subject }}
            </p>
          </div>
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
import api from "../api/index";
export default {
  data() {
    return {
      list: [],
      arr: [],
      box: [],
    };
  },
  created() {
    api.getDailySuggest().then((res) => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
    api.getHotCity().then((res) => {
      console.log(res.data.data[0]);
      for (let i = 0; i < res.data.data.length; i++) {
        this.arr = res.data.data[i];
        this.box.push(this.arr);
      }
      console.log("盒子", this.box);
    });
  },
  filters: {
    thePrice(price) {
      let newType = price.replace("<em>", "").replace("</em>元起", "");
      return newType;
    },
    theType(type) {
      let change =
        type === "bbs"
          ? "游记"
          : type === "lm"
          ? "商城"
          : type === "vedio"
          ? "视频"
          : "精华";
      return change;
    },
  },
};
</script>

<style lang='scss' scoped>
.block {
  width: 1100px;
  height: 600px;
  margin: 0 auto;
  margin-bottom: 100px;
}
.el-carousel__item {
  margin-bottom: 100px;
}
.el-carousel__indicators {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
  .el-carousel__indicators--horizontal {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    text-align: center;
    background-color: red;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__button {
  display: block;
  width: 20 px;
  height: 2 px;
  background-color: red;
  z-index: 800;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
}
// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }

* {
  margin: 0;
  padding: 0;
}
.comment {
  position: absolute;
  top: 52%;
  right: 5%;
  color: #fff;
  span {
    margin-bottom: 1px;
    margin-left: 2px;
  }
}
.teshu {
  color: red;
  font-size: 20px;
}
h1 {
  text-align: center;
  padding: 20px 0;
  font-size: 36px;
  color: #636363;
  clear: both;
}
.context:hover {
  cursor: pointer;
}
.context {
  width: 1100px;
  height: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  .opt:hover {
    box-shadow: 3px 3px 3px #eee;
    transition: all 0.5s ease-in;
  }
  .opt {
    border: 1px solid #eee;
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 300px;
    float: left;
    margin: 10px;
    .type {
      position: absolute;
      top: 15px;
      left: 15px;
      color: #fff;
      width: 40px;
      height: 20px;
      border: 1px solid #fff;
      z-index: 999;
      text-align: center;
      background: rgba(0, 0, 0, 0.2);
    }
    .teshutype {
      position: absolute;
      z-index: 800;
      top: 12px;
      left: -5px;
      padding-bottom: 6 px;
      width: 50px;
      height: 26px;
      text-align: center;
      color: #fff;
      font: 16 px / 26 px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun,
        sans-serif;
      background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAxMDAgNjQiPjxwYXRoIGZpbGw9IiNFRDcwNjMiIGQ9Ik0xMDAgNTJIMFYtMWgxMDB2NTN6Ii8+PHBhdGggZmlsbD0iI0FFNTY0QyIgZD0iTTAgNTJoMTB2MTF6Ii8+PC9zdmc+)
        0 0 / contain no-repeat;
    }
    img {
      width: 100%;
      height: 180px;
    }
    img:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in;
    }
    #logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 10%;
      border: 5px solid #fff;
    }
    .story {
      height: 120px;
      position: relative;
      p {
        padding: 15px;
        font-size: 18px;
        font-weight: bolder;
        height: 30px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p:hover {
        color: #02db94;
        transition: all 0.3s ease-in;
      }
      .sub {
        padding: 15px;
        margin-top: 10px;
        font-size: 18px;
        font-weight: bolder;
        height: 36px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .myinner {
        margin-left: 100px;
      }
      .inner {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        left: 0;
        bottom: 0;
        padding: 15px;
        .left {
          color: #636363;
        }
        .right {
          float: right;
          color: #959595;
        }
      }
    }
  }
}
</style>