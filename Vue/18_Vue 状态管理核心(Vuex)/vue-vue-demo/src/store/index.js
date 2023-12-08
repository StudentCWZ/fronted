/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-12-08 10:44:34
 * @Last Modified by: StudentCWZ
 * @Description: Vue 状态管理核心 Vuex
 */

import { createStore } from 'vuex'
import axios from 'axios

export default createStore({
    state: {
        counter: 0,
    },
    getters: {
        getCounter(state) {
            return state.counter > 0 ? state.counter : "counter 数据异常"
        }
    },
    mutations: {
        addCounter(state, num) {
            state.counter += num
        }
    },
    actions: {
        // 为异步操作所准备的
        asyncAddCounter({ commit }) {
            axios.get('http://iwenwiki.com/api/generator/list.php')
                .then(res => {
                    commit("addCounter", res.data[0])
                })
        }
    },
    modules: {
    }
})
