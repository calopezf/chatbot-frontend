import Vue from 'vue'
import Router from 'vue-router'
import ClassicView from '@/components/ClassicView'
import ModernView from '@/components/ModernView'
import GrayView from '@/components/GrayView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/discover',
      name: 'discover',
      component: ModernView
    },
    {
      path: '/titanium',
      name: 'titanium',
      component: GrayView
    },
    {
      path: '/',
      name: 'classicView',
      component: ClassicView
    }
  ]
})
