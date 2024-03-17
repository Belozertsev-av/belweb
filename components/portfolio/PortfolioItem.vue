<template>
  <div class="item">
    <div class="item__column">
      <div class="item__img">
        <img v-if="item.homepage != null" :src="`http://mini.s-shot.ru/?${item.homepage}`" alt="">
        <img v-else src="~/assets/img/website.png" alt="website">
      </div>
    </div>
    <div class="item__column">
      <div class="item__title subtitle">{{ item.name }}</div>
      <div class="item__description">{{ item.description }}</div>
      <div class="item__buttons">
        <a class="item__link button" v-if="item.homepage != null" :href="item.homepage" target="_blank">
          <div class="btn">
            Сайт
          </div>
        </a>
        <a class="item__github button" :href="item.html_url" target="_blank">
          <div class="btn">
            Репозиторий
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    reqired: true
  }
}) 
</script>

<style lang="scss" scoped>
html.dark-mode {
  .item {
    background-color: $backgroundColorDark;
    box-shadow: 0px 0px 4px $shadowColorDark;
  }
}

.item {
  display: flex;
  background-color: $backgroundColor;
  padding: 15px;
  @include adaptive-value('margin', 15, 5, 0);
  border-radius: 15px;
  box-shadow: 0px 0px 4px $shadowColor;
  width: 100%;

  &__column {
    display: flex;
    flex-direction: column;

    &:first-child {
      @include adaptive-value('padding-right', 30, 15, 0);
    }
  }

  &__img {
    img {
      border-radius: 15px;
      box-shadow: 0px 0px 4px $shadowColor;
      @include adaptive-value('width', 200, 200, 0);
    }

  }

  &__title {
    @include adaptive-value('padding-bottom', 15, 10, 0);
  }

  &__description {
    height: 100%;
  }

  &__buttons {
    display: flex;
  }
}

.button {
  &:not(:last-child) {
    @include adaptive-value('padding-right', 10, 10, 0);
  }

}

@media screen and (max-width: 500px) {
  .item {
    flex-direction: column;
    align-items: center;

    &__column {
      align-items: center;

      &:last-child {
        @include adaptive-value('padding-top', 30, 15, 0);
      }
    }

    &__description {
      @include adaptive-value('padding-bottom', 30, 15, 0);
    }
  }
}
</style>