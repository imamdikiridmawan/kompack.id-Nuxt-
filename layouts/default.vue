<template>
  <div>
    <HeaderPage />
    <Nuxt />
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from '~/components/FooterPage.vue'
import HeaderPage from '~/components/HeaderPage.vue'
export default {
  name: 'HomeLayout',
  components: { FooterPage, HeaderPage }
}
</script>
