<template>
  <div class="c-topline">
    <div class="x-container">
      <div class="headline">
        <slot name="headline" />
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.headline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 44px;
  margin-bottom: 44px;
}
.c-topline {
  width: 1440px;
  margin: 0 auto;
}
</style>
