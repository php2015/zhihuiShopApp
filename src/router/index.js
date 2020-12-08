import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect:"/index/home"
    },
    { 
      path: '/index', 
      component:()=>import("../pages/index/index.vue"),
      children:[
        {
          path:"/index/home",
          component:()=>import("../pages/index/home.vue"),
          meta:{
            name:"首页"
          }
        },
        {
          path:"/index/cate",
          component:()=>import("../pages/index/cate.vue"),
          meta:{
            name:"分类",
          }
        },
        {
          path:"/index/mine",
          component:()=>import("../pages/index/mine.vue"),
          meta:{
            name:"我的"
          }
        },
        {
          path:"/index/car",
          component:()=>import("../pages/index/car.vue"),
          meta:{
            name:"购物车"
          }
        },
        {
          path:"",
          redirect:"/index/home"
        },
      ]
    },
    { 
      path: '/login', 
      component:()=>import("../pages/login/login.vue"),
      meta:{
        name:"登录"
      }
    },
    { 
      path: '/register', 
      component:()=>import("../pages/register/register.vue"),
      meta:{
        name:"注册"
      }
    },
    {
      path:"/details/:id",
      component:()=>import("../pages/details/details.vue"),
      meta:{
        name:"商品详情"
      }
    },
    {
      path:"/proCate/:id",
      component:()=>import("../pages/proCate/proCate.vue"),
      meta:{
        name:"分类详情",
      },
      
    },
    { 
      path:"*", 
      redirect:"/"
    },
  ]
})
