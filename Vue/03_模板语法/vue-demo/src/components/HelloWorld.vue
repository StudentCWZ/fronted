<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-07 10:33:25
 * @Last Modified by: StudentCWZ
 * @Description: Vue 模板语法
-->

<template>
    <div class="hello">
        <h3>学习 Vue: 模板语法</h3>
        <p>{{ message }}</p>
        <div>{{ rawHtml }}</div>
        <div v-html="rawHtml"></div>
        <div :id="dynamicId"></div>
        <p> {{ num + 10 }}</p>
        <p> {{ flag ? "孙猴子" : "傻猴子" }}</p>

    </div>
</template>

<script>
export default {
    // innerHTML innerText
    name: 'HelloWorld',
    data() {
        return {
            message: "学习 Vue",
            rawHtml: "<a href='http://www.itbaizhan.com'>百战<a>",
            dynamicId: 10001,
            num: 10,
            flag: true
        }
    }
}
// 文本
// 数据绑定最常见的形式就是使用 "Mustache"(双大括号)语法的文本插值
// 一般配合 js 中的 data() 设置数据
// 原始 HTML
// 双大括号会将数据解释为普通成本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 命令
// 属性 Attribute
// Mustache 语法不能在 HTML 属性中使用，可以使用 v-bind 指令
// v-bind 可以可以简写 :
// 在我们模板中，我们一直都只绑定简单的 property 键值，Vue.js 都提供了完全的 JavaScript 表达式支持
// 这些表达式会在当前活动实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**
</script>
