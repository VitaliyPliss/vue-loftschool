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

<style lang="scss">
.card-callout {
  padding: 24px 20px;
  margin-bottom: 18px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}
.card-date {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
}
</style>
