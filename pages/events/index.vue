<template>
  <div class="container">
    <div class="events-page">
      <div class="header-page">
        <h1 class="header-page-title">Развлечения</h1>
      </div>
      <div class="filter">
        <div class="filter-audience">
          <el-select
            v-model="audiencesSelecetion"
            placeholder="Аудитория"
            style="background-color: transparent; border: none"
            class="filter-audience-select"
          >
            <el-option v-for="item in audiences" :key="item.id" :label="item.name" :value="item.id"> </el-option>
          </el-select>
        </div>
      </div>
      <div class="events" v-if="!isLoadingEvents">
        <nuxt-link
          :to="'events/' + item.id"
          class="events__item"
          v-on:click="$router.push('/events/' + item.id)"
          v-for="item in events"
          :key="item.id"
        >
          <img v-if="item.preview" :src="require(`~/static/${item.preview}`)" alt="banner-image" />
          <img v-else src="../../static/images/not-image.jpeg" alt="not-image" />
          <div class="events__item__card-info">
            <div class="events__item__card-info__title">
              <h2>
                {{ item.title }}
              </h2>
            </div>

            <div class="events__item__card-info__description">
              <p>{{ item.sub_title }}</p>
            </div>
            <div class="events__item__card-info-row">
              <div class="events__item__card-info-row-col-1">Подробнее</div>
              <div class="events__item__card-info-row-col-2">3 000 ₽</div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="events-loading" v-else>
        <i class="el-icon-loading"></i>
      </div>
      <div class="not-events" v-if="events?.length === 0">Мероприятия не неайдены</div>
      <el-pagination
        v-if="events?.length !== 0 && totalCount > limit"
        class="pagination"
        :page-size="limit"
        @current-change="changePage"
        layout="prev, pager, next"
        :pager-count="11"
        :total="totalCount"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

// Utils
import { monthZeroWord } from '~/utils/month'

// Types
import { Audits } from '~/types/Audits'
import { Event } from '~/types/events/Event'

export default Vue.extend({
  layout: 'pages',
  data() {
    return {
      audiences: null as unknown as Audits[],
      audiencesSelecetion: null as unknown as string,
      events: null as unknown as Event[],
      isMountedAudit: true,
      page: 0,
      limit: 10,
      totalCount: 10,
      isLoadingEvents: true,
      imageUrl: {
        type: '../../static/preview/07f187a8-5e1f-45ba-94f8-c824d924e034.jpeg',
        default: '',
      },
    }
  },
  async fetch() {
    this.audiencesSelecetion = this.$route.query.audit?.toString() || ''
    await this.$axios
      .$get('/audience')
      .then((res) => {
        this.audiences = res
      })
      .catch((err) => {
        console.log(err)
      })

    await this.getEvents()
  },
  methods: {
    changePage(val: number) {
      this.page = val - 1
    },
    month(monthNumber: string): string {
      return monthZeroWord[monthNumber]
    },
    async getEvents() {
      this.isLoadingEvents = true

      await this.$axios
        .$get(this.$route.path, {
          params: { limit: this.limit, page: this.page, audit: this.audiencesSelecetion },
        })
        .then((res) => {
          this.events = res.result
          this.totalCount = res.total
        })
        .catch((err) => {
          console.log(err)
        })
      this.isLoadingEvents = false
    },
  },
  watch: {
    $route(to, from) {},
    page() {
      this.getEvents()
    },
    audiencesSelecetion() {
      if (!this.isMountedAudit) {
        if (!this.audiencesSelecetion) {
          let query = Object.assign({}, this.$route.query)
          delete query.audit
          this.$router.replace({ query })
        } else {
          this.$router.push({
            query: {
              audit: this.audiencesSelecetion.toString(),
            },
          })
        }
      }
      this.getEvents()
      this.isMountedAudit = false
    },
  },
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poetsen+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

.el-select .el-input .el-select__caret {
  color: black;
}
.el-input__inner {
  height: 80px;
  width: 400px;
  border: 2px solid;
  font-size: 18px;
  background-color: transparent;
  border-color: $accent-color;
  &:hover {
    border-color: #24b9f0 !important;
  }
}
.el-icon-arrow-up {
  color: $accent-color !important;
}
.el-select-dropdown__item {
  height: 60px;
  display: grid;
  padding-left: 30px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  span {
    align-self: center;
    justify-self: start;
  }
  &:hover {
    background-color: transparent !important;
  }
}
.el-select-dropdown__item .hover {
  background-color: transparent !important;
}
.header-page {
  margin: 20px 0 30px 0;
  &-title {
    font-size: 40px;
    line-height: 1.25em;
    text-align: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 700;
  }
}
.filter {
  padding: 50px 0;

  &-audience {
    margin-right: 30px;
    display: inline-block;
    &-select {
      background-color: transparent;
      border: none;
    }
  }
}
.events-loading {
  width: 100%;
  display: grid;
  height: 500px;
  i {
    justify-self: center;
    align-self: center;
    font-size: 50px;
  }
}
.events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5%;
  &__item {
    cursor: pointer;
    position: relative;
    width: 100%;
    min-width: 100%;
    height: 600px;
    margin-bottom: 50px;
    overflow: hidden;
    &:hover {
      .events__item__card-info {
        height: 300px;
      }
    }
    &__card-info {
      background-color: white;
      bottom: 0;
      height: 20%;
      width: 100%;
      z-index: 2;
      color: black;
      position: absolute;
      transition: all 0.3s ease;
      display: grid;
      grid-template-rows: 120px 1fr 1fr;
      &__title {
        display: grid;
        height: 120px;
        padding: 0 50px;
        h2 {
          align-self: center;
          font-size: 30px;
          font-family: 'Montserrat Alternates', sans-serif;
          font-weight: 700;
        }
      }
      &__description {
        padding: 10px 50px;
        p {
          font-size: 18px;
          line-height: 1.6em;
        }
      }
      &-row {
        padding: 10px 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        &-col-1 {
          align-self: center;
          font-weight: 600;
          font-size: 17px;
          transition: all 0.1s ease;
          &:hover {
            color: rgba(0, 0, 0, 0.8);
          }
        }
        &-col-2 {
          color: #00a3e0;
          margin-bottom: 10px;
          font-size: 26px;
          font-weight: 700;
          align-self: center;
          justify-self: end;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      transition: background 1s;
      background: rgba(0, 0, 0, 0.1);
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      transition: background 1s;
    }
    &:hover {
      &::after {
        background: rgba(0, 0, 0, 0.3);
      }
    }
    img {
      transition: transform 1s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__buy-ticket {
      position: absolute;
      top: 20px;
      cursor: pointer;
      right: 20px;
      padding: 10px 20px;
      font-size: 13px;
      z-index: 3;
      color: white;
      font-weight: 500;
      border: 1px solid white;
    }
    &__address {
      z-index: 2;
      position: absolute;
      color: white;
      bottom: 30px;
      left: 30px;
      white-space: nowrap;
      overflow: hidden;
      width: 90%;
      text-overflow: ellipsis;
      i {
        font-size: 20px;
        margin-right: 5px;
      }
    }
    &__schedule {
      z-index: 2;
      position: absolute;
      bottom: 110px;
      font-size: 16px;
      left: 30px;
      color: white;
    }
    &__name {
      position: absolute;
      bottom: 70px;
      left: 30px;
      z-index: 2;
      color: white;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 25px;
    }
    &__category {
      position: absolute;
      top: 30px;
      left: 30px;
      opacity: 0.8;
      color: white;
      z-index: 2;
    }
  }
}
.not-events {
  font-size: 30px;
  opacity: 0.5;
  text-align: center;
  margin: 100px 0 200px 0;
}
.pagination {
  text-align: center;
  margin-bottom: 50px;
}
.el-pagination {
  font-size: 25px;
  .el-pager {
    li {
      background-color: transparent;
      font-size: 18px;
      &:hover {
        color: orange !important;
      }
    }
    .active {
      font-weight: 500;
      color: orange;
    }
  }
  button {
    background-color: transparent !important;
    i {
      font-size: 18px !important;
    }
    &:hover {
      i {
        color: orange !important;
      }
    }
  }
}

@media (max-width: 1800px) {
  .events {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
