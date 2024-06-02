<template>
  <div class="about">
    <div class="container">
      <div class="about-header">
        <h1 class="about-header__title">О парке</h1>
        <h3 class="about-header__sub-title">Skypark – первый и единственный в России парк приключений на высоте</h3>
      </div>
      <div class="about-body">
        <p class="about-body__text">
          Skypark находится в уникальной природной локации – Ахштырском ущелье Сочинского национального парка. Здесь вы
          прогуляетесь по самому длинному в России подвесному пешеходному мосту, который входит в топ-13 самых
          впечатляющих мостов мира по версии CNN, полетаете на самых высоких в мире качелях, сможете прыгнуть с самой
          высокой в России банджи-площадки, прокатиться на суперскоростном троллее и посмотреть на мир с высоты птичьего
          полёта, летая на Zipline. Skypark – парк уникальных впечатлений!
        </p>
        <div class="about-body-block">
          <div class="about-body-block-col-1">
            <h2>Природа и виды</h2>
            <p>
              Кавказский горный хребет, Ахштырское ущелье, река Мзымта, Черное море, Форелевое хозяйство и Корабельные
              скалы – это лишь часть тех красот, которые видит человек, когда оказывается в Skypark!
            </p>
            <nuxt-link to="/about/nature" class="about-body-block__arrow-block"
              ><div class="about-body-block__arrow-block__arrow"></div
            ></nuxt-link>
          </div>
          <nuxt-link to="/about/nature" class="about-body-block-col-2"
            ><img src="./../../static/images/about/image-1.jpg" alt=""
          /></nuxt-link>
        </div>
        <p class="about-body__text">
          Яркие зелёные краски летом, желто-красные весной и совершенно невероятные зимние пейзажи – не так важно, в
          какой сезон вы приезжаете к нам, так как каждый по-своему уникален. Скайпарк находится на территории
          Сочинского национального парка – здесь вы можете увидеть субтропический широколиственный колхидский лес во
          всей его красе. Поднявшись на мост, перед вами откроется не только красота Ахштырского ущелья, но и морской
          пейзаж, который никого не сможет оставить равнодушным.
        </p>
        <div class="about-body-block">
          <div class="about-body-block-col-1">
            <h2>История</h2>
            <p>
              Все началось в 2001 году с поездки в Новую Зеландию на площадку AJ Hackett. В том момент у нас не было
              планов, но уже появилось желание построить нечто подобное в России. В течение года наша команда искала
              подходящий каньон от границы с Абхазией до Туапсе, выбирали место, которое будет не только красивым и
              красочным, но и туристически ориентированным.
            </p>
            <nuxt-link to="/about/nature" class="about-body-block__arrow-block"
              ><div class="about-body-block__arrow-block__arrow"></div
            ></nuxt-link>
          </div>
          <nuxt-link to="/about/history" class="about-body-block-col-2"
            ><img src="./../../static/images/about/image-2.jpg" alt=""
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'about',
  layout: 'pages',
})
</script>

<style lang="scss">
.about {
  &-header {
    margin-bottom: 100px;
    position: relative;
    background-image: url(./../../static/images/about/header.jpg),
      linear-gradient(183.61deg, rgba(255, 255, 255, 0) -1.59%, rgba(147, 147, 147, 0.9) 70.84%);
    height: 680px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: multiply;
    position: relative;
    &__title {
      color: white;
      padding-top: 200px;
      padding-left: 200px;
      font-weight: bold;
      margin-bottom: 20px;
      font-size: 70px;
    }
    &__sub-title {
      padding-left: 200px;
      color: white;
      font-size: 25px;
    }
  }
  &-body {
    margin-top: 20px;
    &__text {
      text-align: justify;
      font-size: 20px;
      line-height: 1.5em;
      margin-bottom: 20px;
    }
    &-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 50px;
      margin: 100px 0;
      &-col-1 {
        padding-left: 30px;
        display: grid;
        grid-row-gap: 20px;
        h2 {
          font-size: 40px;
        }
        p {
          font-size: 20px;
          line-height: 1.3em;
        }
      }
      &-col-2 {
        justify-self: end;
      }
      &__arrow-block {
        align-self: center;
        width: 50px;
        display: grid;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.5s ease;
        border: 2px solid $accent-color;
        &:hover {
          transform: scale(1.1);
        }
        &__arrow {
          position: relative;
          height: 20px;
          width: 20px;
          align-self: center;
          justify-self: center;
          &::before,
          &::after {
            border-right: 2px solid #00a3e0;
            content: '';
            display: block;
            height: 8px;
            margin-top: -6px;
            position: absolute;
            -moz-transform: rotate(135deg);
            -o-transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            right: 10px;
            top: 50%;
            width: 0;
          }

          &::after {
            margin-top: -1px;
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
