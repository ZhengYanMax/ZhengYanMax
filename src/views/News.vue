<template>
  <div>
    <div v-for="item in list" :key="item.docid" class="lay">
      <img :src="item.imgsrc" alt="" />
      <div>
        <p>来源:{{ item.source }}</p>
        <p>标题：{{ item.title }}</p>
        <p>解读：{{ item.digest }}</p>
        <p>时间：{{ item.ptime }}</p>
        <p>评论：{{ item.commentCount }}</p>
        <a :href="item.url" v-if="item.url">来源：{{ item.url }}</a>
      </div>
    </div>
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      @changeCurrent="changeCurrent"
    />
  </div>
</template>

<script>
import axios from "axios";
const jsonp = require("jsonp");
import MyPagination from "../components/MyPagination.vue";

export default {
  components: {
    MyPagination,
  },
  methods: {
    changeCurrent(val) {
      console.log("页码：", val);
      //请求对应的页码的数据----
      let n = (val - 1) * 10;
      this.http(n);
    },
    //网络请求
    http(num) {
      this.$jsonp(
        "https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/" +
          num +
          "-10.html",
        {
          callbackName: "artiList",
        }
      ).then((res) => {
        console.log(res);
        this.list = res.BBM54PGAwangning;
        //返回顶部
        document.documentElement.scrollTop = 0;
      });
    },
  },
  data() {
    return {
      list: [],
      // arr: [],
      // container: [],
      total: 300, //通过接口获取的后台返回的总数
      pageSize: 10,
    };
  },
  created() {
    this.http(0);
    // jsonp(
    //   "https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/20-10.html",
    //   { name: "artiList" },
    //   (err, data) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(data.BBM54PGAwangning);
    //       this.arr = data.BBM54PGAwangning;
    //     }

    //     this.$jsonp(
    //       "https://3g.163.com/touch/reconstruct/article/list/BD29LPUBwangning/0-20.html",
    //       {
    //         callbackName: "artiList",
    //       }
    //     ).then((res) => {
    //       console.log(res);
    //       this.container = res.BD29LPUBwangning;
    //     });
    // }
    // );
    // return axios
    //   .get("/foo/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html")
    //   .then((res) => {
    //     // console.log(res.data);
    //     let data = res.data.slice(9, -1);
    //     let newData = JSON.parse(data);
    //     console.log(newData.BBM54PGAwangning);
    //     this.list = newData.BBM54PGAwangning;
    //   });
  },
};
</script>

<style lang='scss' scoped>
.lay {
  display: flex;
  margin: 20px;
  img {
    width: 200px;
    // height: 200px;
  }
  div {
    flex: 1;
    p {
      padding: 0 20px 10px 20px;
    }
    a {
      padding: 0 20px 10px 20px;
      color: red;
    }
  }
}
</style>