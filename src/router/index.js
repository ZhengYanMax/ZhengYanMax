import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta:{
          isLogin:true
        }
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue'),
        meta:{
          isLogin:true
        }
      },{
        path: '/travel',
        name: 'Travel',
        component: () => import('../views/Travel.vue'),
        meta:{
          isLogin:true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})



export default router