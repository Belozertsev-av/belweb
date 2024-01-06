<template>
    <FirstComponent class="first"></FirstComponent>
    <SecondComponent class="second"></SecondComponent>
</template>

<script setup lang="ts">
import FirstComponent from '~/components/main/FirstComponent.vue';
import SecondComponent from '~/components/main/SecondComponent.vue';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    gsap.from('.first', {
        delay: 0.2,
        y: +100,
        duration: 0.5,
        autoAlpha: 0,
        ease: 'back.out(1.7)'
        
    })
})
</script>

<style scoped>

</style>