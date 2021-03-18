import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = ()=>import('../page') 
const home = ()=>import('../page/home') 
const car = ()=>import('../page/car') 
const mine = ()=>import('../page/mine') 



export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      redirect: '/home',
      children:[
        {
          path:'home',
          component:home,
          name:'主页',
        },
        {
          path:'car',
          component:car,
          name:'购物车',
        },
        {
          path:'mine',
          component:mine,
          name:'会员中心',
        }
      ]
    }
  ]
})
