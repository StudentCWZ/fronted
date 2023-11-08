<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-08 14:16:31
 * @Last Modified by: StudentCWZ
 * @Description: 事件处理
-->

<template>
    <div class="hello">
        <button @click="counter += 1">点击: counter{{ counter }}</button>
        <button @click="clickHandle">按钮</button>
        <p>{{ message }}</p>
        <button @click="say('hi')">say hi</button>
        <button @click="say('what')">say what</button>
        <ul>
            <li @click="clickItemHandle(item)" v-for="(item, index) in names" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
// 监听事件
/*
    我们可以使用 v-on 指令(通常缩写为 @ 符号)来监听 DOM 事件，并在触发事件时执行一些 JavaScript。用法为 v-on: click="methodName" 或使用快捷方式 @click="methodName"
*/
// 事件处理方法
/*
    然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称
*/
// 内联处理器中的方法
// 这是官方的翻译称呼，其实我们可以直接叫他 "事件传递参数"
export default {
    name: 'HelloWorld',
    data() {
        return {
            counter: 1,
            message: "消息通知",
            names: ["jack", "Mark", "Frank"]
        }
    },
    methods: {
        clickHandle(event) {
            // 在事件中，读取 data 中的属性，是需要通过 this.属性
            this.message = "消息被撤回"
            // event 是原生的 DOM event
            console.log(event);
            event.target.innerHTML = "点击之后"
        },
        say(data) {
            console.log("触发了");
            console.log(data);
        },
        clickItemHandle(item) {
            console.log(item);
        }
    }
}
</script>

