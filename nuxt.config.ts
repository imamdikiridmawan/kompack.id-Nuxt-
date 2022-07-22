import { defineNuxtConfig } from 'nuxt'

import {resolve} from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    target: "static",
    typescript: {
        shim: false
      }  ,
      css: [
        '../komship.id-nuxtjs-/assets/css/app.css',
        'bootstrap/dist/css/bootstrap.min.css',
        // 'aos/dist/aos.css'
      ], 
      plugins: [
        { src: "../komship.id-nuxtjs-//plugins/clientlibs.js", mode: "client", ssr: false },
        { src: "../komship.id-nuxtjs-//plugins/aos.client.js", ssr: false, mode: "client" },
        { src: "../komship.id-nuxtjs-//plugins/vueselect.js" , ssr: false, mode: "client"}
    ], 
      alias: {
        '@': resolve(__dirname, '')
      },
      components: true,
      // modules: [
      //   // Using package name
      //   '@nuxtjs/axios',
      //   // Relative to your project srcDir
      //   '../komship.id-nuxtjs-/modules/awesome.js',
      //   // Providing options
      //   ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
      //   // Inline definition
      // ]
})
