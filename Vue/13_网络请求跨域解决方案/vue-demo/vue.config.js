/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-19 13:49:44
 * @Last Modified by: StudentCWZ
 * @Description: 网络请求跨域解决方案
 */

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://iwenwiki.com/',
            changeOrigin: true,
        }
    }
  }
})
