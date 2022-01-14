<template>
  <div class="c-feed">
    <Toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="comment in card.comments" :key="comment.id">
          <Comment :text="comment.text" :username="comment.author" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toggler } from '../toggler'
import { Comment } from '../comment'

export default {
  name: 'Feed-item',
  components: { Toggler, Comment },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style>
</style>
