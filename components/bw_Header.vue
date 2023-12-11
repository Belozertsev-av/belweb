<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__logo">
                    <img src="@/redix_logo.png" alt="logo">
                </div>
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
let isActive = ref(false)
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
.header {
    box-shadow: 0 0 8px $shadowColor;
    z-index: 2;
    &__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100%;
    }

    &__menu {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
    }
    &__logo {
        img{
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
    }
    &__toggle{

    }
}
.toggle{

    &__body{
        height: 20px;
        width: 40px;
        border-radius: 10px;
        background-color: $backgroundSecondaryColor;
        position: relative;
        cursor: pointer;
        transition: left 0.3;
        &:hover{
            .toggle__circle{
                box-shadow: 0 0 4px $shadowColor;
            }
        }
    }
    &__circle{
        position: absolute;
        transition: left 0.3s;
        top: -2.5px;
        left: -2.5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: $primaryColor;
    }
}
.active{
    left: 17.5px;
}
.menu {
    &__item {
        font-size: 24px;
        padding: 10px 15px;
        cursor: pointer;
        text-decoration: none;
        user-select: none;
        transition: 0.3s;
        border-radius: 10px;
        &:hover {
            opacity: 0.5;
        }
        &:active {
            transition: 0.1s;
            background-color: rgba($color: $shadowColor, $alpha: 0.2);
            transform: scale(0.97);
            opacity: 1;
        }
    }
}
</style>