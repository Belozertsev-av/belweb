<template>
    <FirstComponent class="first"></FirstComponent>
    <SecondComponent class="second"></SecondComponent>
    <MainThirdComponent class="third"></MainThirdComponent>
</template>

<script setup lang="ts">
import FirstComponent from '~/components/main/FirstComponent.vue';
import SecondComponent from '~/components/main/SecondComponent.vue';
import { gsap } from "gsap";
const main = ref();
let ctx;

onMounted(() => {
    ctx = gsap.context((self) => {
        gsap.from('.first', {
            delay: 0.2,
            y: +100,
            duration: 0.5,
            autoAlpha: 0,
            ease: 'back.out(1.7)'

        })
        gsap.from('.second', {
            scrollTrigger: {
                trigger: '.second',
                start: 'top 70%',
                scrub: 1.5,
                end: 'center center',
                toggleActions: 'restart none none reverse'
            },
            delay: 0.1,
            duration: 0.5,
            autoAlpha: 0,
            ease: 'back.out(1.7)'
        })
        gsap.from('.third', {
            scrollTrigger: {
                trigger: '.third',
                start: 'top 70%',
                scrub: 1.5,
                end: 'center center',
                toggleActions: 'restart none none reverse'
            },
            delay: 0.1,
            duration: 0.5,
            autoAlpha: 0,
            ease: 'back.out(1.7)'
        })
    }, main.value)
})
</script>

<style scoped></style>