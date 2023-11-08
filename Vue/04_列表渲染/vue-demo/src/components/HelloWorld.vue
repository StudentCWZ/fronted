<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-08 13:51:25
 * @Last Modified by: StudentCWZ
 * @Description: 列表渲染
-->

<template>
    <div class="hello">
        <h3>列表渲染</h3>
        <ul>
            <li v-for="item in newsList" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
// 用 v-for 把一个数组映射为一组元素
/*
    我们可以用 v-for 指令基于一个数组来渲染列表。v-for 指令需要使用 item in items 形式的特殊语法。其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名
*/
// 维护状态
/*
    当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用 "就地更新" 策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染
    为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一的 key attribute
*/
export default {
    name: 'HelloWorld',
    data() {
        return {
            newsList: [
                {
                    id: 1001,
                    title: "今日新闻1"
                },
                {
                    id: 1002,
                    title: "今日新闻2"
                },
                {
                    id: 1003,
                    title: "今日新闻3"
                },
                {
                    id: 1004,
                    title: "今日新闻4"
                },
            ]
        }
    }
}
</script>
