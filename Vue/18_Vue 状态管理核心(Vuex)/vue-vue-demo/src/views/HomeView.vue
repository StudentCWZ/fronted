<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-12-08 10:44:34
 * @Last Modified by: StudentCWZ
 * @Description:
-->

<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h3>home</h3>
        <p>{{ getCounter }}</p>
        <button @click="addClickHandle">增加</button>
        <button @click="addAsyncClickHandle">增加</button>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex"


export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    computed: {
        ...mapGetters(['getCounter'])
    },
    methods: {
        ...mapMutations(['addCounter']),
        addClickHandle() {
            // 固定调用方式
            this.addCounter(20)
        },
        addAsyncClickHandle() {
            this.$store.dispatch("asyncAddCounter")
        }
    }
}
</script>
