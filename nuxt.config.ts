// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxtjs/device',
    '@nuxtjs/color-mode',
    ['nuxt-mail', {
      message: {
        to: process.env.EMAIL,
      },
      smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }],
  ],
  
  css: [
    "~/assets/style/style.css",
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-hexrgba': {},
    }
  },

  telemetry: false
})
