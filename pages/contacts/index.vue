<template>
  <div class="contacts">
    <div class="container">
      <h1 class="contacts__title">Как доехать</h1>
      <div class="contacts-body">
        <div class="contacts-body-col-1 contacts-body-col">
          <h2>Контакты</h2>
          <p>8 800 100 4 207</p>
          <p>Контактный центр работает</p>
          <p>ежедневно с 9:00 до 20:00</p>
          <p class="link">sochi@skypark.ru</p>
        </div>
        <div class="contacts-body-col-2 contacts-body-col">
          <h2>График работы</h2>
          <p>Ежедневно с 10:00 до 18:30</p>
          <p><i>* для вошедших до закрытия кассы прогулка доступна до 19:15</i></p>
        </div>
        <div class="contacts-body-col-3 contacts-body-col">
          <h2>Адрес</h2>
          <p>г. Сочи, с. Казачий брод, ул. Краснофлотская</p>
        </div>
      </div>
    </div>
    <iframe
      class="contacts-map"
      src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=false&amp;source=constructor-api&amp;um=constructor%3A9eb055d0453bd128cb560dfae35965486b934df201a81763e8f68e25dea85629"
      frameborder="0"
      allowfullscreen="true"
      width="100%"
      height="100%"
      style="display: block"
    ></iframe>
    <div class="container">
      <p class="contacts-text">
        В Skypark вы можете комфортно добраться трансфером, организованным из Сочи, Адлера, Красной Поляны и
        Олимпийского парка. Можно воспользоваться маршрутами общественного транспорта или доехать на автомобиле.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'contacts',
  layout: 'pages',
})
</script>

<style lang="scss">
.link {
  text-decoration: underline;
  color: blue;
}
.contacts {
  &__title {
    font-size: 40px;
    margin: 20px 0;
    line-height: 1.25em;
    text-align: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 700;
  }
  &-map {
    height: 700px;
  }
  &-text {
    width: 60;
    text-align: center;
    font-size: 20px;
    margin: 50px 0;
  }
  &-body {
    margin: 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    &-col-1 {
    }
    &-col-2 {
    }
    &-col-3 {
      width: 50%;
    }
    &-col {
      h2 {
        margin-bottom: 10px;
        font-size: 20px;
      }
      p {
        margin-bottom: 5px;
      }
      i {
        color: rgba(0, 0, 0, 0.8);
        font-style: italic;
      }
    }
  }
}
</style>
