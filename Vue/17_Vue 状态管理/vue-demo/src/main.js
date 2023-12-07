/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-12-07 09:05:36
 * @Last Modified by: StudentCWZ
 * @Description: Vue 状态管理
 */

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(router).mount('#app')
createApp(App).use(store).mount('#app')
