<template>
  <div class="history">
    <div class="container">
      <div class="history-header">
        <h1 class="history-header__title">История Skypark</h1>
        <h3 class="history-header__sub_title">С 2001 года до сегодняшнего дня</h3>
      </div>
      <div class="history-body">
        <div class="history-body-block">
          <div class="history-body-block-col-1">
            <span></span>
            <div>2001</div>
          </div>
          <div class="history-body-block-col-2">
            <h2 class="history-body-block-col-2__title">Начало</h2>
            <p class="history-body-block-col-2__sub_title"><b>2001 год</b>– банджи-прыжок в Невисе.</p>
            <div
              :class="
                isActive1
                  ? 'history-body-block-col-2-body history-body-block-col-2-body_active'
                  : 'history-body-block-col-2-body'
              "
            >
              <p>
                Основатель проекта Skypark – Дмитрий Федин. Первый прыжок он совершил в каньоне Невис, который находится
                в Новой Зеландии. Это было в 2001 году.
              </p>
              <p>
                История Skypark в Сочи началась в 2001 году с поездки Дмитрия Федина в Новую Зеландию. Именно Новая
                Зеландия считается родиной экстремальных развлечений. На площадке в городе Невис Дмитрий Федин не просто
                впервые прыгнул с банджи, но именно там у него появилась мысль реализовать подобный проект в России.
                Этот прыжок вдохновил его на создание парка высотных аттракционов в Сочи.
              </p>
              <p>
                «Объект в Невисе кардинально отличается от нашего, но когда я увидел долину с подвесной системой, то
                сразу подумал о том, что подобное можно сделать и в России. Тогда еще не было никаких планов, просто
                появилось желание это все построить. По возвращении в Сочи, мы в течение года искали подходящий каньон
                от границы с Абхазией до Туапсе. Мы выбирали место, которое будет не только красивым и красочным, но и
                туристически ориентированным, чтобы туда можно было доставить людей. Красивых мест, конечно, много, но
                сделать бизнес можно далеко не везде. Мы выбрали Ахштырское ущелье».
              </p>
            </div>
            <div @click="isActive1 = !isActive1" class="history-body-block-col-2-btn">
              <div class="history-body-block-col-2-btn-block">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="history-body-block">
          <div class="history-body-block-col-1">
            <span></span>
            <div>2009</div>
          </div>
          <div class="history-body-block-col-2">
            <h2 class="history-body-block-col-2__title">Знакомство с AJ Hackett</h2>
            <p class="history-body-block-col-2__sub_title">
              <b>2009 год</b> – Дмитрий Федин встречается с AJ Hackett в Альпах.
            </p>
            <div
              :class="
                isActive2
                  ? 'history-body-block-col-2-body history-body-block-col-2-body_active'
                  : 'history-body-block-col-2-body'
              "
            >
              <p>
                «С Эй Джей Хаккеттом мы начали вести переговоры в 2009 году. Сначала мы собирались все делать сами, но
                когда поняли насколько все непросто, решили ничего не придумывать, а взять просто лучших в мире и
                попросить их научить нас это делать. Но поговорить с Эй Джеем было непросто. Ежедневно он получает по
                несколько заявок на открытие объектов в разных точках земли. Но не на все предложения он реагирует.
                Безопасность - его первоочередной критерий в работе. Эй Джей тщательно следит за строительством и
                эксплуатацией всех объектов.
              </p>
              <p>
                «Мы писали сотни писем, которые летели в корзину, пытались найти общих знакомых. И однажды, находясь во
                Франции, мы узнали, что туда же приехал покататься на лыжах Эй Джей. Мы попросили организовать встречу
                на горнолыжном курорте, чтобы просто покататься вместе. И вот чудо, Эй Джей согласился. Мы забрались на
                одну из самых высоких зон в Шамони – Гранд Монте, на один из самых крутых склонов. Эй Джей очень хорошо
                катается, в молодости он даже был в сборной Новой Зеландии по горным лыжам. Но мы тоже не промах, так
                как выросли в Красной Поляне. Эй Джей стартанул первый и остановился только в самом низу. Тогда он
                задрал голову вверх с вопросом: «Ну, где же эти русские?» А русские уже стояли рядом с ним. Эй Джей
                сказал: «Слушай, чувак, а ты неплохо катаешься на лыжах! Пожалуй, с тобой стоит поработать»..
              </p>
              <p>
                После долгих переговоров Эй Джей согласился приехать и посмотреть на возможности региона. Когда он
                приехал сюда и увидел, что Сочи – это большой туристический центр, здесь живет полмиллиона человек, он
                понял, что здесь можно построить парк и сделать из данного проекта бизнес. Главные опасения Эй Джи были
                в том, что место просто не будет работать. Но Эй Джей согласился выступить в качестве управляющей
                компании и начал принимать активное участие в концепции парка. Вместе с ним для проектирования всей
                конструкции было выбрано новозеландское инженерное бюро Тиндал Асосиейшен. Архитектор Артур Тиндал в
                свое время занимал первые места по проектам подвесных конструкций. В его архиве очень много пешеходных и
                автомобильных мостов по всему миру.
              </p>
            </div>
            <div @click="isActive2 = !isActive2" class="history-body-block-col-2-btn">
              <div class="history-body-block-col-2-btn-block">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="history-body-block">
          <div class="history-body-block-col-1">
            <span></span>
            <div>2012</div>
          </div>
          <div class="history-body-block-col-2">
            <h2 class="history-body-block-col-2__title">Начало строительства Skypark</h2>
            <p class="history-body-block-col-2__sub_title"><b>2012 год</b>– начало строительства Skypark в Сочи.</p>
            <div
              :class="
                isActive3
                  ? 'history-body-block-col-2-body history-body-block-col-2-body_active'
                  : 'history-body-block-col-2-body'
              "
            >
              <p>
                «На проектирование Skypark ушло 3 года, на строительство – 2. Проектировка и расчеты при таких строениях
                крайне сложные, тем более, что вся документация у нас была на английском языке, приходилось делать
                адаптацию проекта под российские СНиПы. Этим процессом занимались четыре независимых института, два из
                них иностранных. Инфраструктурную часть делали российские специалисты. Дизайн разрабатывали в
                архитектурном бюро «Арт-группа КАМЕНЬ».
              </p>
            </div>
            <div @click="isActive3 = !isActive3" class="history-body-block-col-2-btn">
              <div class="history-body-block-col-2-btn-block">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'history',
  layout: 'pages',
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
    }
  },
})
</script>

<style lang="scss">
.history {
  &-header {
    width: 100%;
    background-image: url(./../../../static/images/about/history/header.jpg),
      linear-gradient(183.61deg, rgba(255, 255, 255, 0) -1.59%, rgba(147, 147, 147, 0.9) 70.84%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: multiply;
    height: 680px;
    position: relative;
    &__title {
      padding-left: 250px;
      padding-top: 200px;
      font-family: 'Montserrat Alternates', sans-serif;
      font-size: 70px;
      color: white;
      font-weight: 700;
      margin-bottom: 20px;
    }
    &__sub_title {
      font-family: 'Montserrat Alternates', sans-serif;
      padding-left: 250px;
      color: white;
      font-size: 25px;
      font-weight: 700;
    }
  }
  &-body {
    width: 80%;
    margin: 100px auto;
    border-left: 4px solid $accent-color;
    &-block {
      display: grid;
      padding-top: 200px;
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 50px;

      &-col-1 {
        display: grid;
        grid-template-columns: 40px auto;
        grid-column-gap: 20px;
        span {
          width: 40px;
          margin-top: 25px;
          height: 4px;
          align-self: start;
          background-color: $accent-color;
        }
        div {
          font-size: 40px;
          color: $accent-color;
          font-weight: 700;
          align-self: start;
          justify-self: start;
        }
      }
      &-col-2 {
        &__title {
          font-size: 50px;
          font-family: 'Montserrat Alternates', sans-serif;
          margin-bottom: 50px;
        }
        &__sub_title {
          font-size: 25px;
          font-family: 300;
        }
        &-body {
          transition: all 0.4s ease;
          overflow: hidden;
          height: 0px;
          &_active {
            height: auto;
          }
          :first-child {
            margin-top: 80px;
          }
          p {
            margin-top: 30px;
            text-align: justify;
            font-size: 22px;
            line-height: 1.3em;
          }
        }
        &-btn {
          width: 50px;
          display: grid;
          height: 50px;
          cursor: pointer;
          margin-top: 50px;
          border: 2px solid $accent-color;
          border-radius: 50%;

          &-block {
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
              margin-top: -1px;
              position: absolute;
              transform: rotate(45deg);
              right: 6px;
              top: 50%;
              width: 0;
            }

            &::after {
              margin-top: -1px;
              right: 11px;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }
  &__descript {
    font-size: 30px;
    font-weight: 700;
    text-align: justify;
    line-height: 1.3em;
    margin: 50px 0;
  }
  &__text {
    margin: 50px 0;
    font-size: 22px;
    line-height: 1.3em;
  }
}
.qute {
  border-left: 2px solid $accent-color;
  padding-left: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
}
</style>
