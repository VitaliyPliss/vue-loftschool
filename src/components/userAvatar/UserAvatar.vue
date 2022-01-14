<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="'../../assets/images/avatars/' + avatar" class="img" alt="user avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      src: '/img/' + this.avatar
    }
  }
}
</script>

<style lang="scss">
.avatar {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  outline: 2px solid #a6328d;
  &:hover {
    outline: none;
  }
  img {
    display: flex;
    margin: auto;
    padding-top: 6px;
    min-width: 80px;
    width: 80px;
  }
}
.username {
  margin-top: 10px;
}
</style>
