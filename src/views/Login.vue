<template>
  <div class="login">
    <el-col :span="8" :offset="8">
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
import api from '../api/index'
import jwt from 'jwt-decode'
import {mapMutations} from 'vuex'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapMutations('loginModule',['setUser']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("检验成功!");
          console.log(this.loginForm);
          this.$store.dispatch('loginModule/getUser',{
              username:this.loginForm.username,
            password:this.loginForm.password
          })
          // api.getLogin({
          //   username:this.loginForm.username,
          //   password:this.loginForm.password
          // })
          // .then(res=>{console.log(res.data);
          // let info=jwt(res.data.token)
          // console.log(info);
          // let user={
          //   user:info.user,
          //   token:res.data.token
          // }
          // this.setUser(user);
          // this.$router.push('/')
          // localStorage.setItem('user',JSON.stringify(user))
          // })
        } else {
          console.log("校验失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.login {
  margin-top: 100px;
}
</style>