<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-17 09:36:13
 * @Last Modified by: StudentCWZ
 * @Description: Axios 网络请求
-->

<template>
    <div class="hello">
        <p> {{ product.title }}</p>
    </div>
</template>

<script>
// import axios from "axios"
import querystring from "querystring"

export default {
    name: 'HelloWorld',
    data() {
        return {
            product: {},
        }
    },
    mounted() {
        // get 请求方式
        // axios({
        //     method: 'get',
        //     url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
        // }).then(res => {
        //     console.log(res.data);
        //     this.product = res.data.chengpinDetails[0]
        // })

        // post 请求方式
        /*
            post 请求参数是需要额外处理的
                - 安装依赖: npm install --save querystring
                - 转换参数格式: qs.stringify({})
        */
        // axios({
        //     method: "post",
        //     url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
        //     data: querystring.stringify({
        //         user_id: "iwen@qq.com",
        //         password: "iwen123",
        //         verification_code: "crfvw"
        //     })
        // }).then(res => {
        //     console.log(res.data);
        // })
        // 快捷方案
        // get
        this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
            .then(res => {
                console.log(res.data);
            })
        // post
        this.$axios.post("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php", querystring.stringify({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        })).then(res => {
            console.log(res.data);
        })
    },
}
</script>

