import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/test/Upload'
import AutoLoading from '@/test/autoLoading'
import Page from '@/test/Page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/autoLoading',
      name: 'autoLoading',
      component: AutoLoading
    }
  ]
})
