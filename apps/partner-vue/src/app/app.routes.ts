import { createMemoryHistory, createRouter } from 'vue-router'

import RouteOne from './views/route-one/RouteOne.vue'
import RouteTwo from './views/route-two/RouteTwo.vue'

const routes = [
  { path: '/route-one', component: RouteOne },
  { path: '/route-two', component: RouteTwo },
  { path: '/', redirect: '/route-one' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
