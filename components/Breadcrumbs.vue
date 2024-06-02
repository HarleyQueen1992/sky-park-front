<template>
  <div class="breadcrumbs">
    <!-- <nuxt-link class="breadcrumbs__item" to="/">Главная</nuxt-link> -->
    <nuxt-link
      :to="breadcrumbsUrl(item)"
      class="breadcrumbs__item breadcrumbs__item_before"
      :key="index"
      v-for="(item, index) in routes"
      v-if="routes[0] !== 'index' && item != ''"
    >
      {{ breadcrumbsName(item) }}</nuxt-link
    >
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import { breadcrumbsWords } from '@/utils/breadcrumbs'

export default Vue.extend({
  name: 'breadcrumbs',
  data() {
    return {
      routes: this.$route.name?.split('-') as string[],
    }
  },
  watch: {
    $route() {
      this.routes = this.$route.name?.split('-')!
      console.log(this.routes)

      console.log(this.routes[this.routes.length - 1])
    },
  },
  methods: {
    breadcrumbsName(item: string) {
      return breadcrumbsWords[item].name
    },
    breadcrumbsUrl(item: string) {
      return breadcrumbsWords[item].url
    },
  },
})
</script>

<style lang="scss">
.breadcrumbs {
  height: 60px;
  padding: 10px 0;
  text-align: center;
  &__item {
    align-self: center;
    justify-self: center;
    padding-right: 20px;
    line-height: 60px;
    color: black;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25em;
    transition: opacity 0.3s;
    padding: 10px 35px 10px 10px;
    position: relative;
    &:hover {
      opacity: 1;
    }
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
</style>
