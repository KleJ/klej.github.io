<template>
  <div class="container">
    <div class="header">
      <div>{{ author }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      author: 'Mikhail Iaruntcev'
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.header {
  color: $black;
  margin: 64px 0;
}
</style>
