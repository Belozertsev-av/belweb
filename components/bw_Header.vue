<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__burger" :class="{ clicked: isClicked }" v-on:click="isClicked = !isClicked">
                    <div class="header__burger-line"></div>
                </div>
                <ul class="header__menu" v-if="isClicked || !isMobile">
                    <NuxtLink v-on:click="toggleMenu" to="/">
                        <li class="menu__item">Главная</li>
                    </NuxtLink>
                    <NuxtLink v-on:click="toggleMenu" to="/portfolio">
                        <li class="menu__item">Портфолио</li>
                    </NuxtLink>
                    <NuxtLink v-on:click="toggleMenu" to="/about">
                        <li class="menu__item">Обо мне</li>
                    </NuxtLink>
                    <NuxtLink v-on:click="toggleMenu" to="/contacts">
                        <li class="menu__item">Контакты</li>
                    </NuxtLink>
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
const isActive = ref(false)
const isClicked = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
    if (isMobile.value && isClicked.value) {
        isClicked.value = !isClicked.value
    }
}
const toggleTheme = () => {
    if (colorMode.preference == 'light') {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
    isActive.value = !isActive.value

}
onMounted(() => {
    isMobile.value = window.innerWidth < 600 ? true : false
    if (colorMode.preference === 'light') isActive.value = false
    else isActive.value = true
})
</script>

<style lang="scss" scoped>
html.dark-mode {
    .header {
        background-color: $backgroundColorDark;
        box-shadow: 0 0 4px $shadowColorDark;
    }

    .header__burger-line {
        background-color: $fontColorDark;

        &:after,
        &:before {
            background-color: $fontColorDark;
        }
    }

    .clicked {
        +.header__menu {

            background-color: $backgroundColorDark;
        }
    }
}

.header {
    position: fixed;
    @include adaptive-value('height', 90, 50, 0);
    background-color: $backgroundColor;
    box-shadow: 0 0 4px $shadowColor;
    width: 100%;
    z-index: 2;

    &__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 100%;
    }

    &__menu {
        transition: all 0.3s;
        display: flex;
        justify-content: space-around;
        position: relative;
        @include adaptive-value("padding", 20, 5, 0);
    }

    &__burger {
        @include adaptive-value("margin-left", 15, 10, 0);
        @include adaptive-value("margin-right", 15, 10, 0);
        margin-top: 10px;
        margin-bottom: 10px;
        display: none;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: relative;
    }

    &__burger-line {
        transition: 0.3s;
        position: absolute;
        height: 3px;
        border-radius: 2px;
        width: 100%;
        top: calc(50% - 2px);
        left: 0;
        background-color: $fontColor;

        &:before {
            content: "";
            transition: 0.3s;
            position: absolute;
            border-radius: 2px;
            height: 3px;
            width: 100%;
            top: -10.5px;
            background-color: $fontColor;
        }

        &:after {
            content: "";
            transition: 0.3s;
            position: absolute;
            border-radius: 2px;
            height: 3px;
            width: 100%;
            top: 10.5px;
            background-color: $fontColor;
        }
    }

}

.toggle {
    &__body {
        background-color: $backgroundSecondaryColor;
        box-shadow: 0 0 4px $shadowColor;
        @include adaptive-value("margin-right", 25, 10, 0);
        height: 12px;
        @include adaptive-value("width", 40, 30, 0);
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        transition: left 0.3;

        &:hover {
            .toggle__circle {
                box-shadow: 0 0 4px $shadowColor;
            }
        }
    }

    &__circle {
        position: absolute;
        transition: left 0.3s;
        z-index: 3;
        @include adaptive-value("top", -6.5, -4.5, 0);
        @include adaptive-value("left", -2.5, 0, 0);
        @include adaptive-value("width", 25, 20, 0);
        @include adaptive-value("height", 25, 20, 0);
        border-radius: 50%;
        background-color: #f9db33;

        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: 50%;
            z-index: -1;
            background-color: rgba($color: #ffe75c, $alpha: 1);
            filter: blur(4px);
        }
    }
}

.menu {
    &__item {
        @include adaptive-value("font-size", $subtitleSizeStart, $subtitleSizeEnd, 0);
        color: $fontColor;
        @include adaptive-value("padding-left", 15, 10, 0);
        @include adaptive-value("padding-right", 15, 10, 0);
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        text-decoration: none;
        user-select: none;
        transition: 0.3s;
        border-radius: 15px;

        &:hover {
            opacity: 0.5;
        }

        &:active {
            background-color: rgba($color: $shadowColor, $alpha: 0.2);
            transition: 0.1s;
            transform: scale(0.97);
            opacity: 1;
        }
    }
}

.clicked {
    .header {
        &__burger-line {
            transform: rotate(-45deg);

            &:before {
                transform: rotate(90deg);
                top: calc(-50% + 2px);
            }

            &:after {
                display: none;
            }
        }
    }

    +.header__menu {
        visibility: visible;
        z-index: -1;
        background-color: $backgroundColor;
        width: 100%;
        top: 0;
        left: 0;
    }
}

.active {
    @include adaptive-value("left", 17.5, 12.5, 0);
}

@media screen and (max-width: 600px) {
    .header {
        &__burger {
            display: flex;
        }

        &__menu {
            visibility: hidden;
            display: flex;
            flex-direction: column;
            position: absolute;
            padding-left: 60px;
            padding-top: 60px;
            top: -400px;
            left: 0;
        }
    }
}

.router-link-active {
    opacity: 0.5;

    +.menu__item:active {
        background-color: none;
        transition: none;
        transform: none;
        opacity: none;
    }

    +.menu__item:hover {
        opacity: none;
    }
}
</style>