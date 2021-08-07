<template>
  <div class="flex flex-column h-full">
    <!-- Hero -->
    <div class="flex flex-col bg-gray-50 w-full items-end p-20">
      <h2 class="text-3xl text-black">{{ globals.siteName }}</h2>
      <p class="text-right prose" v-html="bioHtml"></p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'

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
    bioHtml() {
      return marked(this.pageData.bio)
    },
  },
}
</script>
