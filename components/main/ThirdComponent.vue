<template>
  <section class="third">
    <div class="third__body">
      <div class="third__title title">Выглядит одинаково на всех устройствах</div>
      <div class="third__subtitle subtitle">Наши приложения адаптируются под любой размер экрана!</div>
      <div class="third__block">
        <div class="third__column" id="left-column">
          <div class="third__image">
            <img src="~/assets/img/image_phone.png" alt="phone">
          </div>
          <div class="third__text">Динамические размеры шрифтов, расположение и внешний вид элементов</div>
        </div>
        <div class="third__column" id="right-column">
          <div class="third__image">
            <img src="~/assets/img/image_desktop.png" alt="desktop">
          </div>
          <div class="third__text">Индивидуальная настройка под любой браузер</div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    gsap.from('#left-column', {
      scrollTrigger: {
        trigger: '.third__block',
        start: 'top 80%',
        end: 'center 80%',
        scrub: 1.5,
        toggleActions: 'restart none none reverse'
      },
      delay: 0.2,
      x: -100,
      duration: 0.5,
      autoAlpha: 0,
      ease: 'back.out(1.7)'
    })
    gsap.from('#right-column', {
      scrollTrigger: {
        trigger: '.third__block',
        start: 'top 80%',
        end: 'center 80%',
        scrub: 1.5,
        toggleActions: 'restart none none reverse'
      },
      delay: 0.2,
      x: 100,
      duration: 0.5,
      autoAlpha: 0,
      ease: 'back.out(1.7)'
    })
  }, main.value)
})
onUnmounted(() => {
  ctx.revert()
});
</script>

<style lang="scss">
.third {
  overflow: hidden;

  &__body {
    height: 100dvh;
    margin: 0 auto;
    text-align: center;
  }

  &__title {
    @include adaptive-value('margin-bottom', 10, 5, 0);
  }

  &__subtitle {
    @include adaptive-value('margin-bottom', 30, 15, 0);
  }

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__column {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &__image {
    @include adaptive-value('margin-bottom', 15, 10, 0);

    img {
      height: 50vh;
    }
  }

  &__text {
    padding: 0 20px;
  }
}

@media screen and (max-width: 830px) {
  .third {
    &__body {
      height: auto;
      overflow: hidden;
    }

    &__block {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }

    &__column {
      margin: 20px 0;
      width: 100%;
    }
  }

  #right-column {
    .third__image {
      img {
        height: auto;
        width: 80vw;
      }
    }
  }
}
</style>