<template>
  <div class="home">
    <el-carousel indicator-position="outside" height='600px'>
      <el-carousel-item v-for="item in list" :key="item.title">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  name: "Home",
  data(){
    return{
     list:[]
    }
  },
  components: {},
  mothods: {},
  created() {
    api.getBanner().then((res) => {
      console.log(res.data);
      res.data.banner.forEach((ele) => {
        ele.img = ele.img.replace("www.wwtliu.com/sxtstu", "iwenwiki.com/api");
      });
      this.list=res.data.banner;
    });
  },
};
</script>
<style lang="scss" scoped>
img{
  width: 100%;
}
.home{
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
