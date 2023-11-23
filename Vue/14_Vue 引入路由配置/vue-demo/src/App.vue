<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-23 09:55:37
 * @Last Modified by: StudentCWZ
 * @Description:
-->

<template>
    <!-- 路由的显示入口 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
</template>

<script>
/*
    在 vue 中，我们可以通过 vue-router 路由管理页面之间的关系
    Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举
    在 Vue 引入路由：
        - 第一步: 安装路由 npm install --save vue-router
        - 第二步: 配置独立的路由文件
        - 第三步: 引入路由路径
        - 第四步: 指定路由显示入口 router-view
        - 第五步: 指定路由跳转
*/
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
