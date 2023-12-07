/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-12-07 08:41:24
 * @Last Modified by: StudentCWZ
 * @Description: 嵌套路由配置
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // 重定向
        redirect: '/about/us',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
        children: [
            {
                // 二级导航的路径不要加 /
                path: "us",
                component: () => import('../views/AboutSub/AboutUs.vue')
            },
            {
                // 二级导航的路径不要加 /
                path: "info",
                component: () => import('../views/AboutSub/AboutInfo.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
