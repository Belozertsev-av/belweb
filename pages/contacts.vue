<template>
  <div class="contacts">
    <div class="contacts__block">
      <div class="contacts__adress">Юр. адресс: Россия, Санкт-Петербург, пр-т. Медиков д.3 лит. А</div>
      <div class="contacts__email">Эл. почта: andrew.vl.belozertsev@gmail.com</div>
      <div class="contacts__tel">Телефон: +7 (951) 669-21-54</div>
      <div class="contacts__social">
        <!-- <a href="" class="contacts__vk btn">
        <svg>
          <use href="~/assets/img/vk.svg#vk" height="24" width="24"></use>
        </svg>
        <div>Vk</div>
      </a> -->
        <a href="https://t.me/Andrew_vl_belozertsev" target="_blank" class="contacts__telegram btn">
          <svg>
            <use href="~/assets/img/telegram.svg#telegram" height="24" width="24"></use>
          </svg>
          <div>Telegram</div>
        </a>
        <a href="https://wa.me/79516692154" target="_blank" class="contacts__whatsapp btn">
          <svg>
            <use href="~/assets/img/whatsapp.svg#whatsapp" height="24" width="24"></use>
          </svg>
          <div>WhatsApp</div>
        </a>
      </div>
    </div>
    <div class="contacts__map">
      <client-only>
        <YandexMap class="contacts__map-body" :coordinates="coordinates" :zoom="15.5" map-type="map"
          :detailed-controls="detailedControls">
          <YandexMarker :coordinates="coordinates" marker-id="1" type="Point">
          </YandexMarker>
        </YandexMap>

      </client-only>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
const coordinates = [59.969232, 30.316281];
const detailedControls = {

};

</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  @include adaptive-value('padding-top', 15, 5, 0);

  &__block {
    @include adaptive-value('padding-top', 5, 15, 0);
  }

  &__adress {
    @include adaptive-value('padding-bottom', 15, 10, 0);
  }

  &__email {
    @include adaptive-value('padding-bottom', 10, 5, 0);
  }

  &__tel {
    @include adaptive-value('padding-bottom', 10, 5, 0);
  }

  &__social {
    @include adaptive-value('padding-top', 15, 10, 0);
    @include adaptive-value('padding-bottom', 15, 10, 0);
    display: flex;
  }

  &__map {
    height: 98%;
    width: 100%;
  }

  &__map-body {
    height: 100%;
    width: 100%;
  }
}

.btn {
  svg {
    height: 25px;
    width: 25px;
  }

  @include adaptive-value('margin-right', 15, 10, 0);
}
</style>