import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './views/HelloWorld.vue'

Vue.use(VueRouter)//官方路由器，明确的安装路由功能

const routes = [
    {
        path:'*',//默认路由
        name:'默认首页',
        component:HelloWorld,//首页
    },
    {
        path:'/home',
        name:'博客首页',
        // 路由懒加载
        // 特殊的注释语法来提供 chunk name 同个异步块
        component:() => import(/* webpackChunkName: "group-page" */ './views/home.vue'),
    },
    {
        path:'/list',
        name:'博客列表',
        component:() => import(/* webpackChunkName: "group-page" */ './views/blog/blogList.vue'),
    },
    {
        path:'/detail/:blogId',//动态路由匹配
        name:'博客详情',
        component:() => import(/* webpackChunkName: "group-page" */ './views/blog/blogDetail.vue'),
    },
    {
        path:'/login',
        name:'用户登录',
        component:() => import(/* webpackChunkName: "group-page" */ './views/user/login.vue'),
    }
]

const router = new VueRouter({
    // mode:'history',
    routes:routes
})

export default router