<template>
    <div class="wrapper">
        <BwHeader></BwHeader>
        <main class="main">
                <div class="loader">
                    <div class="loader__progress"></div>
                </div>
                <div class="container">
                    <slot></slot>
                </div>
            </main>
        <BwFooter></BwFooter>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.loader {
    z-index: 3;
    height: 4px;
    width: 100%;
    &__progress {
        // animation: progress 2s infinite ease-in;
        width: 0;
        height: 100%;
        background-color: $primaryColor;
    }
}

@keyframes progress {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}
</style>