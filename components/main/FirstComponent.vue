<template>
    <section class="first">
        <div class="first__body">
            <div class="first__column left">
                <div class="first__img">
                    <img src="~/assets/img/programmer.png" alt="">
                </div>
            </div>
            <div class="first__column right">
                <div class="first__row">
                    <div class="first__title">Я тот, кого вы искали!</div>
                    <div class="first__subtitle">Разрабатываю сайты под ключ</div>
                    <div class="first__text">Занимаюсь проектами любого типа и сложности от простого лендинга, до нагруженных CRM-систем</div>
                </div>
                <div class="first__row">
                    <NuxtLink to="/portfolio" class="first__button btn">
                        <svg >
                            <use href="~/assets/img/portfolio.svg#portfolio"></use>
                         </svg>
                        <div class="text">
                            Портфолио
                        </div>
                    </NuxtLink>
                    <a href="https://github.com/Belozertsev-av" target="_blank" class="first__button btn">
                        <svg >
                            <use href="~/assets/img/github.svg#github"></use>
                        </svg>
                        <div class="text">
                            GitHub
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
html.dark-mode{
    .first{
        &__title{
            color: $fontColorDark;
        }
        &__subtitle{
            color: $secondaryColorDark;
        }
        &__column{
            box-shadow: 0px 0px 4px $shadowColorDark;
        }
    }
    .left{
        background-color: $secondaryColorDark;
    }
    .right{
        background-color: $backgroundColorDark;
    }
}

.first{
    @include adaptive-value('padding-top', 90, 50, 0);
    overflow: hidden;
    &__body{
        width: 100%;
        display: flex;
        @include adaptive-value('padding', 15, 5, 0);
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }
    &__img{
        img{
            @include adaptive-value('width', 450, 200, 0);
            object-fit: contain;
        }
    }
    &__column{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        @include adaptive-value('padding', 15, 5, 0);
        box-shadow: 0px 0px 4px $shadowColor;

    }
    &__title{
        @include adaptive-value('font-size', $titleSizeStart, $titleSizeEnd, 0);
        color: $fontColor;
        font-weight: bold;
        @include adaptive-value('margin-bottom', 10, 5, 0);
    }
    &__subtitle{
        @include adaptive-value('font-size', $subtitleSizeStart, $subtitleSizeEnd, 0);
        color: $secondaryColor;
        @include adaptive-value('margin-bottom', 30, 15, 0);
    }
    &__text{
        @include adaptive-value('margin-bottom', 15, 10, 0);
    }
    &__button{
        margin: 10px 0;
    }
    &__row{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
}
.left{
    background-color: $secondaryColor;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
.right{
    padding-right: 50px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: $backgroundColor;
}

@media screen and (max-width: 830px) {
    .first{
        &__img{
            margin: 0 auto;
            padding: 0;
            margin: 0;
        }
        &__column{
            text-align: center;
        }
        &__body{
            flex-direction: column;
        }
        &__row{
            align-items: center;
            text-align: center;
            margin: 0 auto;
        }
        .left{
            border-top-right-radius: 15px;
            border-bottom-left-radius: 0;
        }
        .right{
            border-bottom-left-radius: 15px;
            border-top-right-radius: 0;
            padding: 15px 20px 10px 20px;
        }
    }
}

</style>