import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'PageHome',
      component: () => import('@/pages/home'),
      meta: {
        requireAuth: true,
        title: 'Home',
        plainLayout: false
      }
    }, // end '/home'
    {
      path: '/account',
      name: 'PageAccount',
      component: () => import('@/pages/account'),
      meta: {
        requireAuth: true,
        title: 'Account',
        plainLayout: false
      },
      children: [
        {
          path: '/account/login',
          name: 'PageAccountLogin',
          component: () => import('@/pages/account/login'),
          meta: {
            requireAuth: false,
            title: 'Login',
            plainLayout: true
          }
        }
      ]
    }, // end '/account'
    {
      path: '/datasource',
      name: 'PageDataSource',
      component: () => import('@/pages/datasource'),
      meta: {
        requireAuth: true,
        title: 'Nguồn dữ liệu',
        plainLayout: false
      }
    }, // end '/datasource/
    {
      path: '/groups',
      name: 'PageGroups',
      component: () => import('@/pages/groups'),
      meta: {
        requireAuth: true,
        title: 'Quản lý nhóm',
        plainLayout: false
      }
    }, // end '/groups'
    {
      path: '/leads',
      name: 'PageLeads',
      component: () => import('@/pages/leads'),
      meta: {
        requireAuth: true,
        title: 'Leads',
        plainLayout: false
      }
    }, // end '/leads'
    {
      path: '/orders',
      name: 'PageOrders',
      component: () => import('@/pages/orders'),
      meta: {
        requireAuth: true,
        title: 'Đơn hàng',
        plainLayout: false
      }
    }, // end '/orders'
    {
      path: '/reports',
      name: 'PageReports',
      component: () => import('@/pages/reports'),
      meta: {
        requireAuth: true,
        title: 'Báo cáo',
        plainLayout: false
      }
    }, // end '/reports'
    {
      path: '/return',
      name: 'PageReturn',
      component: () => import('@/pages/return'),
      meta: {
        requireAuth: true,
        title: 'Hoàn hàng',
        plainLayout: false
      }
    }, // end '/return'
    {
      path: '/settings',
      name: 'PageSettings',
      component: () => import('@/pages/settings'),
      meta: {
        requireAuth: true,
        title: 'Cài đặt',
        plainLayout: false
      }
    }, // end '/settings'
    {
      path: '/shipping',
      name: 'PageShipping',
      component: () => import('@/pages/shipping'),
      meta: {
        requireAuth: true,
        title: 'Giao vận',
        plainLayout: false
      }
    }, // end '/shipping'
    {
      path: '/telesales',
      name: 'PageTelesales',
      component: () => import('@/pages/telesales'),
      meta: {
        requireAuth: true,
        title: 'Telesales',
        plainLayout: false
      }
    } // end '/telesales'
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.getters.isAuth) {
      if (to.name === 'PageAccountLogin') {
        next()
      } else {
        next({name: 'PageAccountLogin'})
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
