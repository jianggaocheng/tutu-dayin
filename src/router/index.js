import { createRouter, createWebHistory } from 'vue-router'
import CalculationMain from '../views/CalculationMain.vue'
import CalculationPreview from '../views/CalculationPreview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'calculation'
    },
    {
      path: '/calculation',
      name: 'calculation',
      component: CalculationMain
    },
    {
      path: '/calculation-preview',
      name: 'calculation view',
      component: () => import('../views/CalculationPreview.vue')
    }
  ]
})

export default router
