<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/b/${content.category}/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://tacolabo.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': '1b8b86a680094c6d8e26f57bf7e18332f4ae' }
      }
    )
    return data
  }
}
</script>

<style>
</style>
