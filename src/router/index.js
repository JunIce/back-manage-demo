import Vue from 'vue'
import Router from 'vue-router'
import Summary from '@/containers/Page/Summary'
import Order from '@/containers/Page/Order'
import NewOrder from '@/containers/Page/NewOrder'
import Dashboard from '@/containers/Page/Dashboard'
import Setting from '@/containers/Page/Setting'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/neworder',
      name: 'NewOrder',
      component: NewOrder
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
