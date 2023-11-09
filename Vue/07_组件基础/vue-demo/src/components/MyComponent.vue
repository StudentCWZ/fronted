<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-09 09:06:01
 * @Last Modified by: StudentCWZ
 * @Description: 组件基础
-->

<template>
    <h3>我是单文件组件</h3>
</template>

<script>
// 单文件组件
/*
    Vue 单文件组件(又名 *vue 文件，缩写为 SFC)是一种特殊的文件格式，它允许将 Vue 组件模板、逻辑与样式封装在当单个文件中
*/
// 加载组件
/*
    1. 第一步: 引入组件 import MyComponentVue from './components/MyComponentVue'
    2. 第二步: 挂载组件 components:{MyComponentVue}
    3. 第三步: 显示组件 <my-componentVue>

*/
export default {
    name: "MyComponent"
}
</script>

<!-- scoped: 如果在 style 中添加此属性，就代表着，当前样式只在当前组件中生效 -->
<style scoped>
h3 {
    color: red;
}
</style>
