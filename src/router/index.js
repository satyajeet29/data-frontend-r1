import Vue                  from 'vue'
import Router               from 'vue-router'
import HelloWorld           from '@/components/HelloWorld'
import LoginPageView        from '@/components/LoginPageView'
import ForgotPasswordView   from '@/components/ForgotPasswordView'
import RegisterView         from '@/components/RegisterView'
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
  ]
})
