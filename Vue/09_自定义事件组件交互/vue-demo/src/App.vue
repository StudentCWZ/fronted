<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-10 09:00:44
 * @Last Modified by: StudentCWZ
 * @Description: 自定义事件传递数据
-->

<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ message }}</p>
    <MyComponent @onEvent="getDataHandle" />
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
    name: 'App',
    data() {
        return {
            message: "",
        }
    },
    components: {
        MyComponent
    },
    methods: {
        getDataHandle(data) {
            console.log(data);
            this.message = data;
        }
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
