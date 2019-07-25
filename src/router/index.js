import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
});