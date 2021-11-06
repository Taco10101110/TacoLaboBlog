import axios from 'axios'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tacolabo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  generate: {
    async routes() {
      const pages = await axios.get(
        'https://tacolabo.microcms.io/api/v1/blog?limit=100', 
        {
          headers: { 'X-MICROCMS-API-KEY': '1b8b86a680094c6d8e26f57bf7e18332f4ae' }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/b/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
