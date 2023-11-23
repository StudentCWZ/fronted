/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-23 09:55:37
 * @Last Modified by: StudentCWZ
 * @Description: Vue 引入路由
 */

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')
