<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-19 13:49:44
 * @Last Modified by: StudentCWZ
 * @Description: 网络请求跨域解决方案
-->

<template>
    <div class="hello">
        <h3>跨域解决方案</h3>
    </div>
</template>

<script>

import axios from "axios";


export default {
    name: 'HelloWorld',
    mounted() {
        axios.get("/api/FingerUnion/list.php")
            .then(res => {
                console.log(res.data);
            })
    }
}
</script>
