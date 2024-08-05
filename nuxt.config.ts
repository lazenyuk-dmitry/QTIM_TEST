// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    'normalize.css',
    '~/styles/fonts.scss',
    '~/styles/main.scss',
  ],

  modules: ["@nuxt/image"]
})