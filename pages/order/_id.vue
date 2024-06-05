<template>
  <div class="orders">
    <div v-if="!isLoading" class="container">
      <div class="orders-item" v-for="item in tickets()">
        <!-- <img
					:src="`http://localhost:5000/` + item.time.date.event.banner"
					alt="banner"
				/> -->
        <div class="orders-item-header">
          <div class="orders-item-header__title">
            <h2>{{ item.title }}</h2>
            <h3>{{ item.sub_title }}</h3>
          </div>
          <div class="orders-item-header__description">
            ООО «Скайпарк», ИНН 2317052629, юридический адрес: 354392, г. Сочи, Красная Поляна, ул. Мичурина, дом 1 8
            800 100 4 207 sochi@skypark.ru
          </div>
          <img
            class="orders-item-header__qr"
            :src="'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + item.id"
            alt=""
            title=""
          />
          <div class="orders-item-header__category">
            <div class="orders-item-header__price">
              Стоимость билета:
              {{ item.price }} ₽
            </div>

            <div class="orders-item-header__number-date">
              № заказа:
              <span
                >{{ order.id }} от
                {{ new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() }}</span
              >
            </div>
            <div class="orders-item-header__ticket">Электронный билет № {{ item.id }}</div>
          </div>
          <div class="orders-item-body">
            <div class="orders-item-body__description">Билет на 1 человека</div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-else><i class="el-icon-loading"></i></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

interface Ticket {
  id: number
  title: string
  sub_title: string
  descript: string
  price: number
}
interface bookingToTickets {
  id: number
  count: number
  ticket: Ticket
}
interface Order {
  id: number
  fio: string
  email: string
  phone: string
  bookingToTickets: bookingToTickets[]
}
export default Vue.extend({
  name: 'order',
  data() {
    return {
      order: null as unknown as Order,
      isLoading: true,
    }
  },
  async fetch() {
    await this.$axios
      .$get(`/booking/${this.$route.params.id}`)
      .then((res: Order) => {
        this.order = res
      })
      .catch((err) => {
        console.log(err)
      })

    this.isLoading = false
  },
  methods: {
    tickets(): Ticket[] {
      let tickets = []
      for (let i = 0; i < this.order.bookingToTickets.length; i++) {
        for (let j = 0; j < this.order.bookingToTickets[i].count; j++) {
          tickets.push(this.order.bookingToTickets[i].ticket)
        }
      }
      return tickets
    },
  },
})
</script>
<style lang="scss">
.loading {
  text-align: center;
  i {
    font-size: 50px;
  }
}
.orders {
  background-color: white;
  &-item {
    margin-top: 30px;
    position: relative;
    padding-bottom: 30px;
    img {
      width: 100%;
    }
    &-header {
      h2 {
        margin-bottom: 20px;
      }
      h3 {
        color: rgba(0, 0, 0, 0.8);
        margin-bottom: 10px;
        font-size: 20px;
      }
      div {
        font-size: 18px;
        line-height: 25px;
      }
      &__qr {
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
        max-width: 200px;
        height: 200px;
        margin: 0 50px;
      }
      &__description {
        margin-bottom: 10px;
        width: 50%;
        font-weight: bold;
      }
    }
    &-body {
      &__event-name {
        margin-top: 5px;
        line-height: 30px;
      }
      div {
        font-size: 18px;
      }
    }
    border-bottom: 2px dashed black;
  }
}
</style>
