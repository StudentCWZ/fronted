/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-12-07 09:07:28
 * @Last Modified by: StudentCWZ
 * @Description: Vue 状态管理
 */

import { createStore } from 'vuex'


// vuex 的核心作用就是帮我们管理组件之间的状态的
const store = createStore({
    // 所有的状态都放在这里(数据)
    state: {
        counter: 0,
    },
})

export default store;
