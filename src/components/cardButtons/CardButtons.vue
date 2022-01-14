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

<style lang="scss">
.card-buttons {
  display: inline-block;
  height: 28px;
  border-radius: 6px;
  border: 1px solid gray;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.17);
  * {
    display: inline-block;
  }
}
.star-btn {
  height: 100%;
  padding: 0 10px;
  background: #fafbfc;
  box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.04),
    inset 0px 2px 0px rgba(255, 255, 255, 0.02);
  border-right: 1px solid gray;
  border-radius: 6px 0px 0px 6px;
  &::before {
    content: "";
    position: relative;
    top: 2px;
    display: inline-block;
    width: 16px;
    height: 18px;
    margin-right: 4px;
    background: url("../../assets/images/star.svg");
  }
}
.star-amount {
  height: 100%;
  padding: 0 10px;
  border-right: 1px solid gray;
}
.fork-btn {
  height: 100%;
  padding: 0 10px;
  background: #fafbfc;
  box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.04),
    inset 0px 2px 0px rgba(255, 255, 255, 0.02);
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  &::before {
    content: "";
    position: relative;
    top: 2px;
    display: inline-block;
    width: 16px;
    height: 18px;
    margin-right: 4px;
    background: url("../../assets/images/fork.svg");
  }
}
.fork-amount {
  height: 100%;
  padding: 0 10px;
}
</style>
