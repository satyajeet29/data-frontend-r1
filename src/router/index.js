import Vue                  from 'vue'
import Router               from 'vue-router'
import HelloWorld           from '@/components/HelloWorld'
import LoginPageView        from '@/components/LoginPageView'
import ForgotPasswordView   from '@/components/ForgotPasswordView'
import RegisterView         from '@/components/RegisterView'
import Test                 from '@/components/Test'
import LoginError           from '@/components/LoginError'
import HomePage             from '@/components/HomePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/loginpageview',
      name: 'LoginPageView',
      component: LoginPageView
    }
    ,
    {
      path: '/forgotpasswordview',
      name: 'ForgotPasswordView',
      component: ForgotPasswordView
    }
    ,
    {
      path: '/registerview',
      name: 'RegisterView',
      component: RegisterView
    }
    ,
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
    ,
    {
      path: '/loginerror',
      name: 'LoginError',
      component: LoginError
    }
    ,
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
