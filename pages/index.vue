<template>
  <HomePage />
</template>

<script>
import HomePage from '~/components/HomePage.vue'
export default {
  name: 'IndexPage',
  components: { HomePage }
}
export default {
  components: {
    StartNow,
    Services,
    Benefit,
    Recommend,
    Flow,
    Features,
    FeatureMobile,
    Conclusion,
    ConclusionMobile,
    Testimoni,
    FAQ
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('https://app.komerce.id/api/homepage/komship/countPartners')
    return {
      data
    }
  },
  head () {
    return {
      title: 'Kompack - Jasa Pegudangan di Lokasi Strategis',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Solusi masalah pergudangan hingga packing order. Kompack menyediakan jasa fulfillment untuk kemudahan bisnis online dan UMKM. Daftar sekarang'
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'kompack'
        },
        {
          vmid: 'og-locale',
          property: 'og:locale',
          content: 'id'
        },
        {
          vmid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          vmid: 'og-title',
          property: 'og:title',
          content: 'Kompack - Jasa Pegudangan di Lokasi Strategis'
        },
        {
          vmid: 'og-description',
          property: 'og:description',
          content: 'Solusi masalah pergudangan hingga packing order. Kompack menyediakan jasa fulfillment untuk kemudahan bisnis online dan UMKM. Daftar sekarang.'
        },
        {
          vmid: 'og-url',
          property: 'og:url',
          content: 'https://kompack.id/'
        },
        {
          vmid: 'og-site_name',
          property: 'og:site_name',
          content: 'Kompack'
        },
        {
          vmid: 'og-image',
          property: 'og:image',
          content: 'https://kompack.id/img/kompack.png'
        },
        {
          vmid: 'og-image-width',
          property: 'og:image:width',
          content: '1280'
        },
        {
          vmid: 'og-image-height',
          property: 'og:image:height',
          content: '720'
        },
        {
          vmid: 'og-see_also',
          property: 'og:see_also',
          content: 'https://www.instagram.com/kompackid/'
        },
        {
          vmid: 'og-see_also2',
          property: 'og:see_also',
          content: 'https://www.facebook.com/kompackid'
        }
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: './komship-lp.png' },
        {
          vmid: 'canonical',
          rel: 'canonical',
          href: 'https://kompack.id/'
        }
      ],
      script: [
        {
          vmid: 'ldjson-schema',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            name: 'Kompack',
            description: 'Solusi masalah pergudangan hingga packing order. Kompack menyediakan jasa fulfillment untuk kemudahan bisnis online dan UMKM. Daftar sekarang',
            url: 'https://kompack.id/',
            image: {
              '@type': 'ImageObject',
              url: 'https://kompack.id/img/kompack.png',
              height: '720',
              width: '1280'
            },
            sameAs: [
              'https://www.facebook.com/kompackid',
              'https://www.instagram.com/kompackid/'
            ],
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://kompack.id/pencarian?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        }
      ]
    }
  },
  methods: {
    getAsyncData () {
      const self = this
      window.setTimeout(function () {
        self.title = 'My async title'
        self.$emit('updateHead')
      }, 3000)
    },
    openWindow (url) {
      window.open(url)
      window.fbq('trackCustom', 'PageView')
    },
    replace (hide, show) {
      document.getElementById(hide).style.display = 'none'
      document.getElementById(show).style.display = 'block'
    },
    replace2 (hide, hide2, show) {
      document.getElementById(hide).style.display = 'none'
      document.getElementById(hide2).style.display = 'none'
      document.getElementById(show).style.display = 'block'
    }
  }
}
</script>
