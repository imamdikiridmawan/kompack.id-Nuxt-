export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Kompack - Jasa Pergudangan di Lokasi Strategis',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'facebook-domain-verification', content: 'bc0kq85eko8zx8xa5hzupawgmzrj0c' },
      {name:'google-site-verification" content="aqtHFvmToPbc6oBDFONzum_v8P2QDFbqAaEBtSnP8SE'},
      { hid: 'description', name: 'description', content: '"Solusi masalah pergudangan hingga packing order. Kompack menyediakan jasa fulfillment untuk kemudahan bisnis online dan UMKM. Daftar sekarang" ' },
      { hid: 'keywords', name: 'keywords', content: 'kompack' },
      { hid: 'og:locale', property: 'og:locale', content: 'id' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Kompack - Jasa Pegudangan di Lokasi Strategis' },
      { hid: 'og:description', property: 'og:description', content: 'Solusi masalah pergudangan hingga packing order. Kompack menyediakan jasa fulfillment untuk kemudahan bisnis online dan UMKM. Daftar sekarang' },
      { hid: 'og:url', property: 'og:url', content: 'https://kompack.id/' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Kompack' },
      { hid: 'og:image', property: 'og:image', content: 'https://kompack.id/img/kompack.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1280' },
      { hid: 'og:image:height', property: 'og:image:height', content: '720' },
      { property: 'og:see_also', content: 'https://www.instagram.com/kompackid/' },
      { property: 'og:see_also', content: 'https://www.facebook.com/kompackid' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', ssr: false, mode: 'client' },
    { src:'~/plugins/fbPixel.js', ssr: false, mode: 'client'},
    { src:'~/plugins/gtm.js', ssr: false, mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-agile',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
