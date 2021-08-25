import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //{
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/championship',
    name: 'Championship',
    component: () => import( '../views/Championship.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import( '../views/Teams.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import( '../views/Calendar.vue')
  },
  {
    path: '/seasons',
    name: 'Team seasons',
    component: () => import( '../views/Seasons.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
