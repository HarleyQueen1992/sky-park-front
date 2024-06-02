<template>
  <div v-if="!isLoadingEvent" class="event-page">
    <div class="container">
      <div class="event-banner">
        <div class="event-banner-description">
          <div class="event-banner-description__title">{{ event.title }}</div>
          <div class="event-banner-description__sub_title">{{ event.sub_title }}</div>
        </div>
        <img v-if="event.banner" :src="require(`~/static/${event.banner}`)" alt="banner-image" />
        <img v-else src="../../static/images/not-image.jpeg" alt="not-image" />
      </div>

      <div class="event-content">
        <div class="event-content-description">
          <div class="event-content-description-col-1">
            <span v-html="event.aboutMe"></span>
          </div>
          <div class="event-content-description-col-2">
            <span v-html="event.description"></span>
          </div>
        </div>
        <div class="event-content-tickets">
          <h1 class="event-content-tickets__title">Билеты</h1>
          <div class="event-content-tickets-list" v-if="tickets.length > 0">
            <div class="event-content-tickets-list-item" v-for="ticket in tickets" :key="ticket.id">
              <div class="event-content-tickets-list-item-content">
                <h1 class="event-content-tickets-list-item-content__title">{{ ticket.title }}</h1>
                <h3 class="event-content-tickets-list-item-content__sub-title">{{ ticket.sub_title }}</h3>

                <div class="event-content-tickets-list-item-content__descript" v-html="ticket.descript"></div>
              </div>
              <div class="event-content-tickets-list-item-price-block">
                <div class="event-content-tickets-list-item-price-block__price">{{ ticket.price }} ₽</div>
                <div class="event-content-tickets-list-item-price-block-counter">
                  <div @click="decrCount(ticket.id)" class="event-content-tickets-list-item-price-block-counter__decr">
                    <span></span>
                  </div>
                  <div class="event-content-tickets-list-item-price-block-counter__value">
                    <span>{{ ticket.count }}</span>
                  </div>
                  <div @click="incrCount(ticket.id)" class="event-content-tickets-list-item-price-block-counter__incr">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="event-content-tickets-not-found" v-else>Билеты не найдены</div>
          <div class="event-content-tickets-add-to-basket" v-if="tickets.length > 0">
            <span>Добавить в корзину</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="event-page-loading">
    <i class="el-icon-loading"></i>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

// Types
import { Event } from '~/types/Event'
import { Ticket } from '~/types/Ticket'

// Utils
import { monthZeroWord } from '~/utils/month'

export default Vue.extend({
  layout: 'pages',
  name: 'event',
  data() {
    return {
      event: null as unknown as Event,
      tickets: [] as unknown as Ticket[],
      isLoadingEvent: true,
    }
  },
  async fetch() {
    await this.$axios
      .$get('/events/' + this.$route.params.id)
      .then((res) => {
        this.event = res
      })
      .catch((err) => {
        console.log(err)
      })
    await this.$axios
      .$get('/ticket/' + this.$route.params.id)
      .then((res) => {
        this.tickets = res
      })
      .catch((err) => {
        console.log(err)
      })
    this.fillCountForTicket()
    this.isLoadingEvent = false
  },
  methods: {
    month(monthNumber: string): string {
      return monthZeroWord[monthNumber]
    },
    decrCount(id: number) {
      let ticket = this.tickets.find((ticket) => ticket.id == id)
      if (ticket) {
        ticket.count--
      }
    },
    incrCount(id: number) {
      let ticket = this.tickets.find((ticket) => ticket.id == id)
      if (ticket) {
        ticket.count++
      }
    },
    fillCountForTicket() {
      for (const ticket of this.tickets) {
        ticket.count = 0
      }
    },
  },
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poetsen+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap');
.event-page {
  &-loading {
    margin: 300px 0;
    text-align: center;
    i {
      font-size: 50px;
    }
  }
}
.event {
  &-banner {
    height: 600px;
    width: 100%;
    position: relative;
    &::before {
      content: '';
      z-index: 2;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &-description {
      position: absolute;
      top: 50px;
      bottom: 50px;
      left: 200px;
      z-index: 2;
      max-width: 80%;
      &__title {
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: bold;
        margin-top: 80px;
        width: 100%;
        font-size: 70px;
        color: white;
      }
      &__sub_title {
        margin-top: 20px;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: bold;
        text-align: right;
        width: 60%;
        font-size: 30px;
        color: white;
      }
    }
  }
  &-content {
    &-description {
      display: grid;
      padding-top: 50px;
      grid-template-columns: 33% 67%;
      font-size: 18px;
      line-height: 1.3em;
      margin-bottom: 50px;
      li {
        list-style-type: circle;
        margin-left: 20px;
      }
      ul {
        margin: 10px 0 10px 20px;
      }
      &-col-1 {
        padding-right: 30px;
      }
      &-col-2 {
        span {
          font-size: 20px;
          line-height: 1.5em;
        }
        padding-left: 30px;
      }
    }
    &-tickets {
      &__title {
        font-size: 40px;
        padding-bottom: 20px;
        margin-left: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      &-not-found {
        padding: 200px 0;
        text-align: center;
        font-size: 40px;
        color: rgba(0, 0, 0, 0.5);
      }
      &-list {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        &-item {
          display: grid;
          grid-template-rows: auto 150px;
          grid-row-gap: 20px;
          padding: 75px 75px 50px 75px;
          &-content {
            &__title {
              color: $accent-color;
              font-family: 'Montserrat Alternates', sans-serif;
              line-height: 1.1em;
              font-size: 26px;
              margin-bottom: 25px;
              text-align: center;
            }
            &__sub-title {
              padding: 0 40px;
              font-size: 18px;
              line-height: 1.3em;
              text-align: center;
              font-weight: 400;
            }
            &__descript {
              margin-top: 50px;
              li {
                position: relative;
                padding-left: 50px;
                margin-bottom: 10px;
                &:before {
                  content: '';
                  position: absolute;
                  left: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                  height: 8px;
                  border-radius: 50%;
                  width: 8px;
                  background-color: $accent-color;
                }
                color: #bdbdbd;
                font-size: 16px;
              }
            }
          }

          &-price-block {
            display: grid;
            grid-template-rows: 1fr 1fr;
            &__price {
              align-self: center;
              justify-self: center;
              font-size: 30px;
              font-weight: 700;
            }
            &-counter {
              align-self: center;
              justify-self: center;
              display: grid;
              height: 80px;
              grid-template-columns: 80px 80px 80px;
              &__value {
                span {
                  font-size: 22px;
                  font-weight: 500;
                  align-self: center;
                  justify-self: center;
                }
                align-self: center;
                justify-self: center;
                display: grid;
                height: 80%;
                background-color: white;
                width: 80%;
                border: 2px solid $accent-color;
                border-radius: 50%;
              }
              &__decr {
                cursor: pointer;
                display: grid;
                span {
                  width: 25px;
                  height: 2px;
                  background-color: rgba(0, 0, 0, 0.5);
                  align-self: center;
                  justify-self: center;
                  transform: translateY(-50%);
                }
              }
              &__incr {
                cursor: pointer;
                display: grid;
                span {
                  align-self: auto;
                  justify-self: center;
                  position: relative;
                  &::before {
                    content: '';
                    width: 25px;
                    height: 2px;
                    top: 50%;
                    left: 50%;
                    background-color: rgba(0, 0, 0, 0.5);
                    transform: translate(-50%, -50%);
                    position: absolute;
                  }
                  &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    height: 25px;
                    width: 2px;
                    background-color: rgba(0, 0, 0, 0.5);
                  }
                }
              }
            }
          }
        }
      }
      &-add-to-basket {
        cursor: pointer;
        margin: 50px auto;
        background-color: $accent-color;
        width: 280px;
        padding: 10px;
        font-weight: 500;
        font-size: 18pxnpm ru;
        color: white;
        border-radius: 20px;
        text-align: center;
      }
    }
  }
}

@media (max-width: 2000px) {
  .event {
    &-banner {
      height: 500px;
    }
  }
}
</style>
