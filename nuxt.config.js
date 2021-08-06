export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'custom-mech-keyboards-davao',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: process.env.BACKEND_URL
          ? `${process.env.BACKEND_URL}/uploads/favicon_3a79ed5b78.png`
          : 'favicon.ico',
      },
    ],
  },

  env: {
    backendUrl: process.env.BACKEND_URL || 'http://localhost:1337',
  },

  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL || 'http://localhost:1337',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxtjs/proxy',
    // '@nuxtjs/apollo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // apollo: {
  //   tokenName: 'nuxt-apollo', // specify token name
  //   cookieAttributes: {
  //     expires: 7, // optional, default: 7 (days)
  //   },
  //   defaultOptions: {
  //     $query: {
  //       // fetchPolicy: 'network-only',
  //       errorPolicy: 'all',
  //     },
  //   },
  //   watchLoading: '@/apollo/loadingHandler.js',
  //   errorHandler: '@/apollo/errorHandler.js',
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: process.env.BACKEND_URL,
  //     },
  //   },
  // },

  // proxy: {
  //   '/api/': {
  //     target: process.env.BACKEND_URL || 'http://localhost:1337',
  //     pathRewrite: { '^/api/': '' },
  //     changeOrigin: true,
  //   },
  // },
}
