import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/materias',
      name: 'materias',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/SubjectsView.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
    }
  ]
})




