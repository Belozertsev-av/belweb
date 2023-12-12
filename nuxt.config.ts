// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },
  app: {
    head: {
      title: "Белозерцев Андрей - Web-разработка, Vue.js, jQuery, JavaScript",
      meta: [
        {
          charset: 'utf-8'
        }
      ],
      link: [
        { rel: 'icon', href: './redix_logo.png', type: 'image/png' },
        { rel: 'preconnect', href: "https://fonts.googleapis.com" },
        { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: '' },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;700&display=swap" }
      ]
    }
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_colors.scss" as *;`,
        }
      }
    }
  }
})