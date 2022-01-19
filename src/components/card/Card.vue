<template>
  <div>
    <CardAuthor :card="card" />
    <div class="card-callout">
      <slot name="cardContent" />
      <CardButtons :card="card" />
    </div>
    <Feed :card="card" />
    <div class="card-date">{{ card.date }}</div>
  </div>
</template>

<script>
import { Feed } from '../../components/feed'
import { CardAuthor } from '../../components/cardAuthor'
import { CardButtons } from '../../components/cardButtons'

export default {
  name: 'card',
  components: { Feed, CardAuthor, CardButtons },
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./card.scss" scoped>

</style>
