import Vuex from 'vuex'
import { Booking } from '~/types/Booking'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      booking: [] as Booking[],
    }),
    getters: {
      getBooking: (state) => {
        return state.booking
      },
      getBookingById: (state) => (payload: number) => {
        return state.booking.filter((el) => el.id == payload)
      },
      getBookingCount: (state): number => {
        return state.booking.length
      },
    },
    mutations: {
      setBooking: (state, payload: Booking) => {
        if (state.booking.find((item) => item.id == payload.id)) {
          state.booking = state.booking.filter((el) => el.id != payload.id)
        }
        state.booking?.push(payload)
      },
      clearBooking: (state, payload) => {
        state.booking = []
      },
      deleteBookingById: (state, payload: number) => {
        state.booking = state.booking.filter((el) => el.id != payload)
      },
    },
  })
}

export default createStore
