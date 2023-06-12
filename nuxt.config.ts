// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
      ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
    ],
    googleFonts: {
        preconnect: true,
        families: {
          'Noto Sans': {wght: [100, 200, 300, 400, 500, 600, 700, 800]},
        }
      },
})
