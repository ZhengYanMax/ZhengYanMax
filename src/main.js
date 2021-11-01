import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './router/permisson'
import './assets/css/iconfont.css'
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.config.productionTip = false
let user =localStorage.getItem('user')
if (user) {
  user=JSON.parse(user);
  store.commit('loginModule/setUser',user)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
