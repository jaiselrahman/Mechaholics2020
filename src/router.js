import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/google-it',
      name: 'google-it',
      component: () => import('./views/GoogleIt.vue')
    }, {
      path: '/google-it/result',
      name: 'google-it-result',
      component: () => import('./views/GoogleItResult.vue')
    }
  ]
})
