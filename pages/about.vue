<template>
  <div class="about">
    <div class="about__block">
      <div class="about__column">
        <div class="about__img">
          <img src="~/assets/img/photo1.png" alt="photo">
        </div>
      </div>
      <div class="about__column">
        <div class="about__title title">"Мастер по изготовлению обуви ручной работы"</div>
        <div class="about__text">Мое первое образование - конструктор технолог изделий из кожи. Еще не закончив колледж
          в 2016 году я успел порабоать на различных
          производствах обуви, цеху по производсту обувных колодок и даже в сети мастерских по ремонту обуви. Закончив
          обучение, мы с приятелем решили открыть свое дело - шить обувь ручной работы на заказ. Время шло, дело росло и
          приносило
          прибыль, однако удовлетворения от работы я не получал. Я осознал, что это обувное дело не мое. Я обучил себе
          приемника и начал искать
          свое призвание...</div>
      </div>
    </div>
    <div class="about__block reverse">
      <div class="about__column">
        <div class="about__img">
          <img src="~/assets/img/photo2.png" alt="photo">
        </div>
      </div>
      <div class="about__column">
        <div class="about__title title">"Интересно все, но люблю одно"</div>
        <div class="about__text">В поисках дела своей жизни, я перепробовал много всего. Несколько лет изучал
          архитектуру, занимался дизайном и пробовал себя в 3d моделировании. Все это было очень интересно, но не
          находило отголоска в моей душе. Тогда один мой знакомый предложил обучится верстке сайтов и помочь ему с
          заказами на фрилансе. Я решил попробовать и к большому для меня удивлению, мне стало так интересно, что я
          решил
          изучить программирование глубже. Я начал изучать литературу, читать документации, смотреть различные обучающие
          видео и посещать курсы. В конце концов я понял, что это имеено то, что я искал, то чем я
          бы хотел заниматься по жизни и поступил в колледж, чтобы получить профильное образование...</div>
      </div>
    </div>
    <div class="about__block">
      <div class="about__column">
        <div class="about__img">
          <img src="~/assets/img/programmer.png" alt="photo">
        </div>
      </div>
      <div class="about__column">
        <div class="about__title title">"Путь к мечте"</div>
        <div class="about__text">За время учебы я попробовал себя в различных направлениях программирования и выбрал
          для себя - веб разработку и разработку мобильных приложений. В своих учебных проектах я стал использовать
          Vue.js и мой знакомый подкидывал мне не сложные заказы, чтобы я мог набраться опыта. После продолжительного
          времени работы в таком режиме, стало ясно - чтобы двигаться дальше одного фриланса не достаточно. Тогда я стал
          искать работу, чтобы принять участвие в интересных проектах и высрасти как специалист... </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.about {
  @include adaptive-value('padding', 15, 5, 0);

  &__block {
    display: flex;
    align-items: center;
  }

  &__column {
    padding-right: 15px;
    display: flex;
    flex-direction: column;
  }

  &__img {
    img {
      @include adaptive-value('height', 300, 200, 0);
      @include adaptive-value('width', 300, 200, 0);
    }
  }

  &__title {
    @include adaptive-value('padding-bottom', 30, 15, 0);
  }

}


.reverse {
  display: flex;
  flex-direction: row-reverse;

  .about__column {
    text-align: end;
    padding-left: 15px;
  }
}

@media screen and (max-width: 600px) {
  .about {
    &__block {
      flex-direction: column;
    }

    &__column {
      padding-top: 15px;
    }
  }
}
</style>