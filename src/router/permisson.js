import router from './index'
import store from '../store/index'
router.beforeEach((to,from,next)=>{
    //1.判断进入当前路由的时候是否需要登录
    if(to.meta.isLogin){
      //需要登录进入
      //2. 判断是否已经登录过  没有登录过--跳转登录界面
      let token=store.state.loginModule.userInfo.token;
      if(token){
        next()
      }else{
        next('/login')
      }
    }else{
      next();
    }
  })