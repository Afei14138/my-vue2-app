import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import User from "../views/User.vue"

Vue.use(VueRouter)
// 1. 创建路由组建
// 2. 将路由与组件进行映射
// 3. 创建 router 实例
const routes = [
    {path: '/home', component: Home},
    {path: '/user', component: User}
]

const router = new VueRouter({
    routes: routes
})

export default router

