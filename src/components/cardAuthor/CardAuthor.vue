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
<style lang="scss">
.card-author {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
  img {
    height: 100%;
    min-width: auto;
  }
  p {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
