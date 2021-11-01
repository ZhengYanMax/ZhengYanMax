import api from '../../api/index'
import jwt from 'jwt-decode'
import router from '../../router/index'
import Element from 'element-ui'
export default {
  namespaced: true,
  state: {
    userInfo: {
      user: '',
      token: ''
    }
  },
  mutations: {
    setUser(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    getUser({commit},payload) {
      api.getLogin(payload)
        .then(res => {
          console.log(res.data);
          if (res.data.status!==200) {
            Element.Message.error('出错啦');
            return;
          }
          let info = jwt(res.data.token)
          // console.log(info);
          let user = {
            user: info.user,
            token: res.data.token
          }
          commit('setUser',user)
          // this.setUser(user);
          router.push('/')
          localStorage.setItem('user', JSON.stringify(user))
        })
    }
  }
}