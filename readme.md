## 默写
1. 获取state 
2. 获取mutations 和 模块获取 （直接获取全局 获取模块的  辅助函数 4个）
3. 获取actions 和 模块获取
4. 获取getters 和 模块获取
10遍人员：
    （贾志伟 高坤-3-4 祝亚彪-4 刘磊-3）

## Vue库 Element-ui
1. 介绍：
   Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库

2. Vant库--vue移动端  react移动端 小程序 

3. 安装：
   1. npm直接安装：npm i element-ui -S 
   2. 脚手架安装：新版的 vue-cli 准备了相应的 Element 插件  
      1. 安装vue项目
      2. 安装element: vue add element 
        安装选择：
        1. 选择安装模式  全部安装  按需加载、
        2. 文件覆盖scss (n)  如果写yes -- vue项目配置scss支持 并且 覆盖element-自定义主题
        3. 中文选择


## Vue全家桶
1. 介绍：
    蓝莓派的pc端效果  pc端效果界面

2. 技术
  Vue + vue-router + vuex + Element + axios + (三方插件-swiper)  + node.js后台 

3. 搭建项目依赖：
   1. vue create vue-lanmei-project 
   2. vue add element 
   3. npm i axios -S 
   4. npm i swiper@5.x vue-xxx-swiper -S (可以选择)

4. 项目初始化
   1. css初始化
   2. 无用文件删除
   3. 创建需要的路由模块

## 导航
1. element导航菜单
2. 配置路由模式



## 路由拦截
1. 首页随便进入 
2. 新闻 个人中心必须登录才可以进入 
   1. 全局前置守卫 
   2. 路由元信息


## 路由跳转报错
降低路由安装的版本：
    vue-router:'3.2.0'
    vue-router:'3.0.7'(推荐)


## 登录界面



## 后台 （了解）
1. 搭建后台服务:npm i express -S 
2. 生产token: npm i jsonwebtoken -S 
   

## 前端获取token后 解析token字段
1. 安装：npm i jwt-decode -S 
2. 导入：import jwt from 'jwt-decode'
3. 使用:  jwt(token字段)



## vuex存储登录信息 
1. 创建store仓库
2. 创建登录模块  用户信息 userInfo 
3. 登录界面存储vuex  其他组件需要获取vuex数据


## 登录显示 + 轮播


## Vue 跨域 jsonp
1. axios是Vue官方推荐的一个ajax插件，用于请求后的传递过来的数据。
   1. 安装方式：npm install axios -S
   2. 在所需要使用axios的文件中引入axios, import axios from 'axios'
   3. 使用get/post等请求方式
   4. 不支持jsonp 


2. jsonp
   1. jsonp可用于跨域请求json数据。
   2. 安装方式：npm install jsonp --save

   3. 在所需要使用jsonp的文件中引入jsonp, const jsonp=require('jsonp')

   4. 通过jsonp请求后端数据，具体代码如下：

     jsonp('路径',options , (err, data) => {
         if (err) {
               console.error(err.message);
         } else {
               data
         }
      })
   参数说明：
      jsonp(url, opts, fn)
         url( String) 要获取的网址
         opts( Object), 可选
            param( String) 用于指定回调的查询字符串参数的名称（默认为callback）
            timeout( Number) 发出超时错误后多长时间。0禁用（默认为60000）
            prefix( String) 处理 jsonp 响应的全局回调函数的前缀（默认为__jp）
            name( String) 处理 jsonp 响应的全局回调函数的名称（默认为prefix+ 递增计数器）
         fn 回调函数
            使用err, data参数调用回调。
            如果超时，err将是一个Error对象，其message为 Timeout。
            返回一个函数，该函数在调用时将取消正在进行的 jsonp 请求（fn不会被调用）。

3. vue-jsonp
   1. 安装：npm i vue-jsonp -S
   2. 使用
      import { VueJsonp } from 'vue-jsonp'
      // Vue Plugin.
      Vue.use(VueJsonp)

   3. 语法:
      this.$jsonp('路径', {
         callbackQuery: 'cb',//后台接受的
         callbackName: 'jsonp_func',//前台接受的
         name: 'LancerComet',
         age: 100
      }).then(res=>{

      })

## 分页
1. 写一个分页的组件 element 
2. 

## 新闻接口说明
1. jsonp格式
接口地址: https://3g.163.com/touch/reconstruct/article/list/'+type+'/0-10.html
    type 可选值
    export const junshi = 'BAI67OGGwangning';
    export const yaowen = 'BBM54PGAwangning';
    export const guonei = 'BA8FF5PRwangning';
    export const guoji = 'BAI6I0O5wangning';
    export const caijing = 'BA8EE5GMwangning';
    export const keji = 'BA8D4A3Rwangning';
    export const yule = 'BA8F6ICNwangning'; // 时尚

2. /10-10.html   假设最大起点：/300-10.html   几页：30页
   1. 第一个参数：是开始的位置   /0-10.html [0,...9]
   2. 第二个参数：获取的数量个数 /10-10.html [10,...19]  [20,29] [30,39]
   
3. 总的页码 total=300 page-size:10 



## 穷游
1. 今日推荐: https://www.qyer.com/qcross/home/index.php?action=recommend
2. 穷游商城: https://www.qyer.com/qcross/home/index/recommendbiz?page=1
3. 热门游记与话题:https://www.qyer.com/qcross/home/ajax?action=thread
