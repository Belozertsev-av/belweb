 import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'
 
 const settings = {
      apiKey: "65cc17a4-427e-4a16-9a77-f6d949815588",
      lang: 'ru_RU',
      version: '2.1'
    }

export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.vueApp.use(plugin, settings)
})
