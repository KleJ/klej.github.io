<template>
  <ul class="list">
    <li
        class="list__item"
        v-for="(desc, index) in descriptions" :key="index">
      {{ desc }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProfileBlock',
  props: ['descriptions']
};
</script>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  padding-inline-start: 0;
}

.list__item {
  margin: 12px;
}
</style>
