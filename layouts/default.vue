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
</style>