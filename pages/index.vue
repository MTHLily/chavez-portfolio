<template>
  <div class="flex flex-column h-full">
    <!-- Hero -->
    <div class="flex flex-col bg-gray-50 w-full items-end p-20">
      <h2 class="text-3xl">{{ globals.siteName }}</h2>
      <p class="text-right">{{ pageData.bio }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ $axios }) {
    const pageData = await $axios.$get('http://localhost:1337/home')
    return { pageData }
  },
  head() {
    return {
      title: this.globals.siteName || 'Custom Mechanical Keyboards Davao',
      meta: [
        {
          content: this.pageData.seo.description,
        },
      ],
    }
  },
  computed: {
    ...mapState(['globals']),
  },
}
</script>
