<template>
  <div class="card-buttons">
    <button class="star-btn">Stars</button>
    <div class="star-amount">{{ card.stars }}</div>
    <button class="fork-btn">Fork</button>
    <div class="fork-amount">{{ card.forks }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardButtons',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./cardButtons.scss" scoped>

</style>
