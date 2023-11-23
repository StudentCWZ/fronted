/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-23 10:00:00
 * @Last Modified by: StudentCWZ
 * @Description: Vue 引入路由
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import about from '../views/about.vue'


// 配置信息中需要页面的相关配置
const routes = [
    {
        path: '/',
        component: homeView
    },
    {
        path: '/about',
        component: about
    }
];

const router = createRouter({
    /*
        createWebHashHistory
            home: http://localhost:8080/#/
            about: http://localhost:8080/#/about
            原理: a 标签锚点连接
        createWebHistory
            home: http://localhost:8080/
            about: http://localhost:8080/about
            此种方式，需要后台配置做重定向，否则会出现 404 问题
            原理: H5 pushState()
    */
    history: createWebHashHistory(),
    routes
});

export default router;