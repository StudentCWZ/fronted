<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-10 08:35:12
 * @Last Modified by: StudentCWZ
 * @Description: Props 组件交互
-->

<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <MyComponent :title="title" :age="age" :names="names" />
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
    name: 'App',
    data() {
        return {
            title: "我是一个标题",
            age: "20",
            names: [
                "Jack",
                "Mark",
                "Frank",
            ]
        }
    },
    components: {
        MyComponent
    }
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
