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
                    <div class="first__title title">Я тот, кого вы искали!</div>
                    <div class="first__subtitle subtitle">Меня зовут Андрей и я разрабатываю сайты под ключ</div>
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
 смм
<script setup lang="ts">

</script>

<style lang="scss" scoped>
html.dark-mode{
    .first{
        &__column{
            box-shadow: 0px 0px 4px $shadowColorDark;
        }
    }
    .left{
        background-color: $primaryColorDark;
    }
    .right{
        background-color: $backgroundColorDark;
    }
}

.first{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include adaptive-value('margin-top', 50, 30, 0);
    &__body{
        height: 100%;
        width: 100%;
        display: flex;
        @include adaptive-value('padding', 15, 5, 0);
        flex-direction: row;
        justify-content: center;
        text-align: center;
        height: 80vh;
    }
    &__img{
        img{
            @include adaptive-value('width', 450, 250, 0);
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
        @include adaptive-value('margin-bottom', 10, 5, 0);
    }
    &__subtitle{
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
    background-color: $primaryColor;
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
            height: auto;
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