import { createRouter, createWebHistory } from 'vue-router'
import SplashPage from '../views/SplashPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // Route for displaying Projects.
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      // Route for displaying Work Experience.
      path: '/work-experience',
      name: 'workExperience',
      component: () => import('../views/WorkView.vue'),
    },
  ],
})

export default router
