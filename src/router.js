import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  base: '/store-vue/',
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/Category.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('./views/Member.vue'),

    },
    {
      path:'search',
      name:'search',
      component:()=> import('./views/Search.vue')
    },
    {
      path:'goods',
      name:'goods',
      component:()=> import('./views/Goods.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/Address.vue'),
      children: [{
        path:'',
        redirect:'all'
      },
        {
        path: 'all',
        component: () => import('./views/all.vue'),

      },
      {
        path: 'form',
        name:'form',
        component: () => import('./views/form.vue'),
        }]

    }
  ]
})
