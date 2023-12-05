import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/index/Home.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/parser',
      name: 'parser',
      component: () => import(/* webpackChunkName: "parser-example" */'@/components/parser/example/Index.vue')
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      component: () => import(/* webpackChunkName: "tinymce-example" */'@/components/tinymce/example/Index.vue')
    },
    {
      path: '/hhh',
      name: 'hhh',
      component: () => import(/* webpackChunkName: "tinymce-example" */'@/hhh.vue')
    }
  ]
})

export default router
