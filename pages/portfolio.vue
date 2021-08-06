<template>
  <div>
    <!-- <PortfolioCard
      v-for="card in cards"
      :key="card.id"
      :title="card.name"
      :image-src="card.card_images[0].image_url"
    ></PortfolioCard> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const cardData = await $axios.$get(
      'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Magician'
    )

    const cards = cardData.data

    return { cards }
  },
}
</script>

<style></style>
