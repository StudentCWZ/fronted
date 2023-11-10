<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-10 08:37:24
 * @Last Modified by: StudentCWZ
 * @Description: Props 组件交互
-->

<template>
    <h3>prop 传递数据</h3>
    <p>{{ title }}</p>
    <p>age={{ age }}</p>
    <ul>
        <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>
</template>

<script>
// Prop 类型参数其实是没有类型限制的
/*
    Prop 传递参数其实是没有类型限制的
*/
export default {
    name: "MyComponent",
    props: {
        title: {
            type: String,
            default: ""
        },
        age: {
            type: Number,
            default: 0
        },
        names: {
            type: Array,
            // 数组和对象必须使用函数进行返回
            default: function () {
                return []
            }
        }
    }
}
</script>

<style scoped></style>