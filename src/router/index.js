import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/error',
      name:'Error',
      component:Error
    },
    {
      path:'*',
      name:'404',
      component:Error
    }
  ]
});



