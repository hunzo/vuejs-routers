import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ParamsComp from '../components/HelloParams.vue'
import QueryComp from '../components/HelloQuery.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/code/:id',
    name: 'params',
    component: ParamsComp
  },
  {
    path: '/search',
    component: QueryComp
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import services from '../services/callServices'

router.beforeEach((to, from, next) => {
  console.log(to, from)
  console.log(services.showData())
  console.log(services.show())
  next()
})

export default router
