<template>
    <section class="second">
            <div class="second__body">
                <div class="second__text-body">
                    <div class="second__title title">Какие технологии я использую?</div>
                    <div class="second__subtitle subtitle">Работу над созданием сайта можно разделить на 4 части</div>
                    <div class="second__text">
                        <ul>
                            <li>Разработка дизайна</li>
                            <li>Проектирование баз данных</li>
                            <li>Написание серверной части приложения</li>
                            <li>Написание клиентской части приложения</li>
                        </ul>
                         <p>Для каждого этапа используется спецефический набор технологий и инструментов. Вот мой стек и он постоянно пополняется!</p>
                    </div>
                </div>            
                <div class="second__block-body">
                        <div class="second__steck-list" ref="logoBlock">
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/html5-plain.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/css3-plain.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/javascript-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/vuejs-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/vuetify-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/typescript-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/kotlin-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/spring-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/java-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/mysql-plain.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/postgresql-plain.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/sqlite-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/figma-original.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/illustrator-plain.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/photoshop-plain.png" alt="">
                            </div>
                            <div class="second__steck-item">
                                <img src="~/assets/img/logos/git-plain.png" alt="">
                            </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const logoBlock = ref()

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    gsap.from('.second__text-body', {
        scrollTrigger: {
            trigger: '.second__text-body',
            start: 'top 70%',
            scrub: 1.5,
            end: 'center center',
            toggleActions: 'restart pause resume reverse'
        },
        delay: 0.2,
        x: -200,
        duration: 0.5,
        autoAlpha: 0,
        ease: 'back.out(1.7)'
    })
    gsap.from(logoBlock.value.children, {
        scrollTrigger: {
            trigger: logoBlock.value,
            start: 'top 70%',
            end: 'center center',
            scrub: 1.5,
            toggleActions: 'restart pause resume reverse'
        },
        stagger: 0.25,
        delay: 0.2,
        x: +200,
        duration: 3,
        autoAlpha: 0,
        ease: 'back.out(1.7)'
    })
})
</script>

<style lang="scss" scoped>
    html.dark-mode{
        .second{
            &__steck-item{
            background-color: $backgroundColorDark;
            box-shadow: 0 0 4px $shadowColorDark;
            }
        }
    }
    .second{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__body{
            margin: 0 auto;
            text-align: center;
            @include adaptive-value('padding', 15, 5, 0);
            display: flex;
        }
        &__title{
            @include adaptive-value('margin-bottom', 10, 5, 0);
        }
        &__text{
            li{
                padding-left: 10px;
                margin: 5px 0;
                &::before{
                    content: "-";
                    padding-right: 5px;
                }
                &:last-child{
                    @include adaptive-value('margin-bottom', 20, 10, 0);
                }
            }
            @include adaptive-value('margin-bottom', 30, 15, 0);
        }
        &__text-body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: start;
            width: 50%;
            margin: 0 auto;
        }
        &__block-body{
            display: flex;
            justify-content: flex-end;
            margin: 0 auto;
        }
        &__subtitle{
            @include adaptive-value('margin-bottom', 20, 10, 0);
        }
        &__steck-list{
            width: 100%;
            display: grid;
            @include adaptive-value('gap', 10, 5, 0);
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
        &__steck-item{
            margin: 10px;
            @include adaptive-value('padding', 20, 10, 0);
            background-color: $backgroundColor;
            border-radius: 50%;
            box-shadow: 0 0 4px $shadowColor;
            img{
            @include adaptive-value('width', 50, 30, 0);
            }
        }
    }
    @media screen and (max-width: 830px) {
        .second{
            &__body{
                flex-direction: column;
            }
            &__text-body{
                width: auto;
                text-align: center;
            }
            &__text{
                ul{
                    width: fit-content;
                    margin: 0 auto;
                }
                li{
                    width: fit-content;
                    text-align: start;
                }
            }
        }
    }
</style>