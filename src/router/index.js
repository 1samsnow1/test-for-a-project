import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import educationList from '../views/educationListView.vue'
import contactUs from '../views/contactUs.vue'
import education from '../views/educationView.vue'
import notFound from '../views/notFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/:catchAll(.*)',
      name:'notFound',
      component: notFound,
    },
    {
      path: '/news',
      name: 'educationList',
      component: educationList
    },
    // {
    //   path: '/category/:category_id/page/:page',
    //   name: 'newsPage',
    //   component: educationList,
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component : contactUs,
    },
    {
      path: '/education',
      name: 'education',
      component:education,
    },
    {
      path: '/education/:id',
      name: 'education',
      component:education,
    },
  ]
})

export default router
