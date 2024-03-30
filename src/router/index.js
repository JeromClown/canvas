import Vue from 'vue'
import Router from 'vue-router'
import dome from '../pages/dome.vue'
import dome1 from '../pages/dome1.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'dome',
    component: dome
  },{
    path: '/dome1',
    name: 'dome1',
    component: dome1
  }
]

const router = new Router({
  // mode: 'history',  // 设置路由模式为history
  routes
})

export default router
