import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'

Vue.use(Router)
// eslint-disable-next-line
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '豆瓣电影'
      }
    }
  ]
})
