<template>
    <div class="wrapper">
        <BwHeader></BwHeader>
        <main class="main">
            <div class="container">
                <slot></slot>
            </div>
        </main>
        <BwFooter></BwFooter>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<style lang="scss" scoped></style>