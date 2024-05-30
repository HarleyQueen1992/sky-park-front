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
          <h1>Билеты</h1>
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

// Utils
import { monthZeroWord } from '~/utils/month'

export default Vue.extend({
  layout: 'pages',
  name: 'event',
  data() {
    return {
      event: null as unknown as Event,
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
    this.isLoadingEvent = false
  },
  methods: {
    month(monthNumber: string): string {
      return monthZeroWord[monthNumber]
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
        margin: 0 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
