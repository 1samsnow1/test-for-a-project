import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import educationList from '../views/educationListView.vue'
import contactUs from '../views/contactUs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/educationList',
      name: 'educationList',
      component: educationList
    },
    {
      path: '/educationList/:page',
      name: 'educationListPage',
      component: educationList,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component : contactUs,
    },
    {
      path: '/education',
      name: 'education',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/educationView.vue')
    }
  ]
})

export default router
