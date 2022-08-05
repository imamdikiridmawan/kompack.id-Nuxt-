export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Landing Page Kompack',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
