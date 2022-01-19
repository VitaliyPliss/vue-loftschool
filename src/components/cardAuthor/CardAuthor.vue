<template>
  <div class="card-author">
    <img class="user-profile" :src="card.img" :alt="card.author" />
    <p class="user-name">{{ card.author }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardAuthor',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" src="./cardAuthor.scss" scoped>

</style>
