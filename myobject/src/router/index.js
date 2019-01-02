import Vue from 'vue'
import Router from 'vue-router'
import tittle from '@/components/tittle'

Vue.use(Router)
// eslint-disable-next-line
export default new Router({
  routes: [
    {
      path: '/',
      name: 'tittle',
      component: tittle,
      meta: {
        title: '豆瓣电影'
      }
    }
  ]
})
