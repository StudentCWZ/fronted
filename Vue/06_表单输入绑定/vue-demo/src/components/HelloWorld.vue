<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-09 08:36:26
 * @Last Modified by: StudentCWZ
 * @Description: 表单输入绑定
-->

<template>
    <div class="hello">
        <input type="text" v-model.lazy="username">
        <input type="text" v-model.trim="password">
        <p>{{ username }}, {{ password }}</p>
        <button @click="clickGetUserName">获取用户名</button>
    </div>
</template>

<script>
/*
    你可以用 v-model 指令在表单 <input>、 <textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方式来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。
    它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理
    // 修饰符
    在默认情况下，v-model 在每次 input 事件触发将输入框的值与数据进行同步。你可以添加 lazy 修饰符，从而转为在 change 事件之后进行同步
    如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符
*/
export default {
    name: 'HelloWorld',
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        clickGetUserName() {
            console.log(this.username);
        }
    }
}
</script>


