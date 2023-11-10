<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-10 09:03:13
 * @Last Modified by: StudentCWZ
 * @Description: 自定义事件传递数据
-->

<template>
    <h3>自定义事件传递数据</h3>
    <button @click="sendClickHandle">点击传递</button>
</template>

<script>
export default {
    name: "MyComponent",
    data() {
        return {
            message: "我是 MyComponent 数据"
        }
    },
    methods: {
        sendClickHandle() {
            // 参数一：字符串
            // 参数二：传递的数据
            this.$emit(
                "onEvent", this.message
            )
        }
    }
}
</script>

<style scoped></style>