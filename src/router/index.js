import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import User from "../views/User.vue"
import Main from "../views/Main.vue"
import Mall from "../views/Mall.vue"
import PageOne from "../views/PageOne.vue"
import PageTwo from "../views/PageTwo.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)
// 1. 创建路由组建
// 2. 将路由与组件进行映射
// 3. 创建 router 实例
const routes = [
    // 总路由
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            {path: 'home', name:'home', component: Home},// 首页
            {path: 'user', name:'user', component: User}, // 用户管理
            {path: 'mall', name:'mall', component: Mall}, // 商品管理
            {path: 'page1', name:'page1', component: PageOne}, // 页面 1
            {path: 'page2', name:'page2', component: PageTwo}, // 页面 2

        ] 
    },
    // 登录页不含其他页面所以单出来一个路由
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    routes: routes
})

export default router

