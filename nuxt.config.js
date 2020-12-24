// import path from 'path'
import colors from 'vuetify/es5/util/colors'
require('dotenv').config({
  silent: true,
  path: process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env',
})

export default {
  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL || 'localhost:3000',
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [{}],
    titleTemplate: '%s - Limited Custom Handmade Merchendise',
    title: 'Acapulco',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/sketch-1605558670823.ico',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/hover.css'],
  env: {
    PORT: process.env.PORT || '127.0.0.1',
    HOST: process.env.HOST || '3000',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/animate.css.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/dotenv',
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyC77kzTcPi7rJsGKgmH0j62YYj1PUX_uWE',
          authDomain: 'acapulco-e86b9.firebaseapp.com',
          projectId: 'acapulco-e86b9',
          storageBucket: 'acapulco-e86b9.appspot.com',
          messagingSenderId: '652596111912',
          appId: '1:652596111912:web:a64d3ae42f255f2944a31d',
          measurementId: 'G-15G0W8Q4G2',
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedMutation: null,
              onAuthStateChangedAction: 'SET_AUTH_USER',
            },
            emulatorPort: 3000,
            emulatorHost: 'http://localhost',
          },
        },
      },
      '@nuxtjs/axios',
      '@nuxtjs/auth',
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },
  },
  serverMiddleware: ['@/server/index.js'],
}
