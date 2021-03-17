import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () => import('../pages/login/login')
const index = () => import('../pages/index/index')
const home = () => import('../pages/home/home')
const menu = () => import('../pages/menu/menu')
const role = () => import('../pages/role/role')
const manager = () => import('../pages/manager/manager')
const cate = () => import('../pages/cate/cate')
const specs = () => import('../pages/specs/specs')
const goods = () => import('../pages/goods/goods')
const member = () => import('../pages/member/member')





export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component:login
    },
    {
      path: '/',
      component:index,
      children:[
        {
          path: 'home',
          name: '首页',
          component:home,
        },
        {
          path:'menu',
          name:'菜单列表',
          component:menu,
        },
        {
          path:'role',
          name:'角色列表',
          component:role,
        },
        {
          path:'manager',
          name:'管理员列表',
          component:manager,
        },
        {
          path:'cate',
          name:'商品分类',
          component:cate,
        },
        {
          path:'spec',
          name:'商品规格',
          component:specs,
        },
        {
          path:'goods',
          name:'商品管理',
          component:goods,
        },
        {
          path:'member',
          name:'会员管理',
          component:member,
        },
        {
          path:'',
          redirect: '/home'
        }
      ]
    },
    {
      path: '*',
     redirect: '/login'
    }
  ]
})
