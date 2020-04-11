import main from './view/index.vue'
import demo from './view/demo'
const routes = [
  {
    path: '/',
    component: main,
    meta: { title: '首页' }
  }, {
    path: '/demo',
    component: demo,
    meta: { title: '首页' }
  }
]

export default routes
