import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestFunc from '@/components/TestFunc'

Vue.use(Router)

export default new Router({
  routes: [
   /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/',
      name: 'TestFunc',
      component: TestFunc
    }
  ]
})
