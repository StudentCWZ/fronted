<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-17 13:47:52
 * @Last Modified by: StudentCWZ
 * @Description: Axios 网络请求封装
-->

<template>
    <div class="hello">
    </div>
</template>

<script>
import api from "../api/index"

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted() {
        api.getChengpin().then(res => {
            console.log(res.data);
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
