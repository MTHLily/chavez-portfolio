<template>
  <div class="bg-gray-300 w-50">
    <div>
      <img :src="imageSrc" alt="Picture" />
    </div>
    <div class="bg-white">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
      require: true,
    },
    imageSrc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
