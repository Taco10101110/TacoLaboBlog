<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="content"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://tacolabo.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': '1b8b86a680094c6d8e26f57bf7e18332f4ae' }
      }
    )
    return data
  }
}
</script>