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
    {
      // Route for displaying resume.
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue'),
    },
  ],
})

export default router
