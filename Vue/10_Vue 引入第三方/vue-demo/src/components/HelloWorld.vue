<!--
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-15 20:56:51
 * @Last Modified by: StudentCWZ
 * @Description: Vue 引入第三方
-->

<template>
    <div class="hello">
        <Swiper>
            <swiper-slider>
                <img src="../assets/logo.png" alt="">
            </swiper-slider>
            <swiper-slider>
                <img src="../assets/logo.png" alt="">
            </swiper-slider>
            <swiper-slider>
                <img src="../assets/logo.png" alt="">
            </swiper-slider>
        </Swiper>
    </div>
</template>

<script>

import { Swiper, SwiperSlider } from 'swiper/vue';
import 'swiper/css'

export default {
    name: 'HelloWorld',
    components: {
        Swiper,
        SwiperSlider
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
