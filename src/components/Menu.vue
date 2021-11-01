<template>
  <div class="menu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">个人中心</el-menu-item>
      <div v-if="flag"  class="tologin">
        <span class="user">欢迎{{ $store.state.loginModule.userInfo.user }}</span>
        <el-button @click="loginout">退出登录</el-button>
      </div>
      <div v-else class="tologin"><el-button @click="logining">立即登录</el-button></div>
    </el-menu>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
      flag: false,
    };
  },
  created(){
    if (this.$store.state.loginModule.userInfo.user) {
      this.changeFlag()
    }
  },
  methods: {
    ...mapMutations("loginModule", ["setUser"]),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginout() {
      this.setUser("");
      this.flag=false;
      // localStorage.removeItem('user')
    },
    logining() {
      this.$router.push("/login");
    },
    changeFlag(){
      this.flag=true
    }
  },
};
</script>

<style lang='scss' scoped>
.menu {
  background: #545c64;
  .el-menu-demo {
    width: 1200px;
    margin: 0 auto;
  }
}
.user {
  color: white;
  font-size: 20px;
  line-height: 69px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.tologin{
  float: right;
}
.el-button {
  margin-left: 20px;
  margin-top: 10px;
  
}
</style>