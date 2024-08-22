// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // TODO devtools na .env
  devtools: { enabled: true },
  telemetry: false,
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-viewport'],
  app: {
    head: {
      title: 'Ecomail - chalange',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'cs'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],

      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap'
        }
        // {
        //   rel: 'apple-touch-icon',
        //   sizes: '180x180',
        //   href: '/apple-touch-icon.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '32x32',
        //   href: '/favicon-32x32.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '16x16',
        //   href: '/favicon-16x16.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/x-icon',
        //   href: '/favicon.ico'
        // },
        // {
        //   rel: 'manifest',
        //   href: '/site.webmanifest'
        // }
      ],
      style: [],
      script: [],
      noscript: []
    }
  },
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 867,
      lg: 1296
    }
  }
})
