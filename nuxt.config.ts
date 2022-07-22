import { defineNuxtConfig } from 'nuxt'

import {resolve} from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    target: "static",
    typescript: {
        shim: false
      }  ,
      css: [
        '~/assets/css/app.css',
        'bootstrap/dist/css/bootstrap.min.css',
        // 'aos/dist/aos.css'
      ], 
      plugins: [
        { src: "@/plugins/clientlibs.js", mode: "client", ssr: false },
        { src: "@/plugins/aos.client.js", ssr: false, mode: "client" },
        { src: "@/plugins/vueselect.js" , ssr: false, mode: "client"}
    ], 
      alias: {
        '@': resolve(__dirname, '')
      },
      components: true,
      // modules: [
      //   // Using package name
      //   '@nuxtjs/axios',
      //   // Relative to your project srcDir
      //   '@/modules/awesome.js',
      //   // Providing options
      //   ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
      //   // Inline definition
      // ]
})
