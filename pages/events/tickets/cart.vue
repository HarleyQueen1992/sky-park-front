<template>
  <div class="cart-page">
    <div class="container">
      <div class="cart-header">
        <h1 class="cart-header__title">Корзина</h1>
      </div>
      <Dialog :dialogVisible="dialogVisible" :dialogVisibleFalse="dialogVisibleFalse" />
      <div v-if="!isLoading && carts.length !== 0" class="cart-list">
        <div class="cart-list-header cart-list-column">
          <span></span>
          <span>Количество</span>
          <span>Стоимость</span>
          <span></span>
        </div>
        <div class="cart-list-item cart-list-column" v-for="item in carts" :key="item.id">
          <div class="cart-list-item-col-1">
            <h2 class="cart-list-item-col-1__event">{{ item.title }}</h2>
            <h3>{{ item.sub_title }}</h3>
          </div>
          <div class="cart-list-item-col-2">
            <div class="cart-list-item-col-2-count">
              <span class="cart-list-item-col-2-count__row-1">{{ getCount(+item.id) }} шт</span>
            </div>
          </div>
          <div class="cart-list-item-col-3">
            <div class="cart-list-item-col-3-price">
              <span
                >{{ item.price * getCount(+item.id) }}
                ₽
              </span>
            </div>
          </div>
          <div class="cart-list-item-col-4">
            <i @click="deleteItem(+item.id)" class="el-icon-close"></i>
          </div>
        </div>
      </div>
      <div v-if="carts.length === 0" class="cart-empty">
        <div>Корзина пуста</div>
        <button @click="$router.push('/events')" class="cart-btns__continue-shopping cart-btns__btn">
          Продолжить покупки
        </button>
      </div>
      <div class="cart-loading" v-if="isLoading">
        <i class="el-icon-loading"></i>
      </div>
      <div v-if="carts.length !== 0" class="cart-total">
        <span class="cart-total-col-1">Итого</span>
        <span class="cart-total-col-2">{{ totalPrice() }} ₽ </span>
      </div>
      <div v-if="carts.length !== 0" class="cart-btns">
        <button @click="$router.push('/events')" class="cart-btns__continue-shopping cart-btns__btn">
          Продолжить покупки
        </button>
        <button @click="dialogVisible = true" class="cart-btns__make-purchases cart-btns__btn">Оформить покупки</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

// Types
import { Cart } from '@/types/events/tickets/cart/Cart'

// Components
import Dialog from '~/components/events/tickets/Dialog.vue'
import { Booking } from '~/types/Booking'

export default Vue.extend({
  name: 'cart',
  layout: 'pages',
  components: { Dialog },
  data() {
    return {
      carts: [] as Cart[],
      isLoading: true,
      booking: this.$store.getters.getBooking as Booking[],
      dialogVisible: false,
    }
  },
  async fetch() {
    for (let item of this.booking) {
      await this.$axios
        .get(`/ticket/${item.id}`)
        .then((res) => {
          this.carts.push({
            ...res.data[0],
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    this.isLoading = false
  },
  methods: {
    dialogVisibleFalse() {
      this.dialogVisible = false
    },
    deleteItem(itemId: number) {
      this.carts = this.carts.filter((el) => el.id !== itemId.toString())
      this.$store.commit('deleteBookingById', itemId)
    },
    getCount(id: number): number {
      return this.booking.find((el) => el.id == id)?.count ?? 1
    },
    totalPrice() {
      let total = 0
      for (let i = 0; i < this.booking.length; i++) {
        total += this.carts[i]?.price * this.booking[i]?.count
      }
      return total
    },
  },
})
</script>

<style lang="scss">
.cart-page {
  margin-top: 20px;
  margin-bottom: 50px;
}
.dialog {
  z-index: 99999;
}
.cart {
  &-header {
    margin-bottom: 30px;
    &__title {
      font-size: 40px;
      line-height: 1.25em;
      text-align: center;
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight: 700;
    }
  }
  &-list {
    &-column {
      display: grid;
      grid-template-columns: auto 20% 20% 50px;
    }
    &-header {
      height: 60px;
      span {
        align-self: center;
        justify-self: center;
        text-transform: uppercase;
        opacity: 0.5;
        font-size: 14px;
      }
    }
    &-item {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding: 30px 0;
      &-col-1 {
        h2 {
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        h3 {
          font-size: 22px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
        }
      }
      &-col-2 {
        align-self: center;
        justify-self: center;
        &-count {
          margin: 10px;
          display: grid;
          grid-template-rows: 1fr;
          &__row-1 {
            font-size: 20px;
            align-self: center;
            justify-self: center;
          }
        }
      }
      &-col-3 {
        align-self: center;
        justify-self: center;
        font-size: 20px;
        font-weight: 500;
      }
      &-col-4 {
        align-self: center;
        justify-self: center;
        font-size: 30px;
        i {
          opacity: 0.5;
          cursor: pointer;
          transition: opacity 0.3s;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  &-total {
    font-size: 25px;
    margin-top: 50px;
    color: black;
    text-align: right;
    display: grid;
    grid-template-columns: 1fr 300px;
    font-weight: 700;
    &-col-1 {
      align-self: center;
      justify-self: start;
    }
    &-col-2 {
      margin-right: 120px;
      align-self: center;
      justify-self: end;
    }
  }
  &-btns {
    margin-top: 50px;
    text-align: right;
    &__continue-shopping {
      transition: background-color 0.3s;
      &:hover {
        background-color: rgb(249, 241, 241);
      }
    }
    &__make-purchases {
      background-color: black;
      color: white;
      transition: background-color 0.3s;
      &:hover {
        background-color: rgb(54, 54, 54);
      }
    }
    &__btn {
      margin-left: 20px;
      font-size: 16px;
      cursor: pointer;
      padding: 15px 50px;
      border: 1px solid black;
    }
  }
  &-loading {
    text-align: center;
    margin: 300px 0;
    font-size: 50px;
  }
  &-empty {
    margin: 100px 0;
    text-align: center;
    div {
      font-size: 30px;
      opacity: 0.5;
      margin-bottom: 30px;
    }
  }
}
</style>
