<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <ul class="header__menu">
                    <li class="menu__item">Обо мне</li>
                    <li class="menu__item">Портфолио</li>
                    <li class="menu__item">Контакты</li>
                </ul>
                <div class="header__toggle" v-on:click="toggleTheme">
                    <div class="toggle__body">
                        <div class="toggle__circle" :class="{ active: isActive }"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">


const colorMode = useColorMode()
let isActive = (colorMode.preference == 'light') ? ref(false) : ref(true)
const toggleTheme = () => {
    if (colorMode.preference == 'light') {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
    isActive.value = !isActive.value
    
}
</script>

<style lang="scss" scoped>

</style>