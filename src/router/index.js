import Vue from 'vue'
import Router from 'vue-router'
import ClassicView from '@/components/ClassicView'
import ModernView from '@/components/ModernView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ModernView',
      name: 'ModernView',
      component: ModernView
    },
    {
      path: '/',
      name: 'classicView',
      component: ClassicView
    }
  ]
})
