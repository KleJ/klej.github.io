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
  name: 'Profile',
  data() {
    return {
      descriptions: [
        'Passionate Front-End Developer with 9+ years of hands-on experience in commercial software development',
        'Major experience with modern frameworks (Vue.js, Angular), module bundlers, version control systems and excellent knowledge of core JavaScript',
        'Good team player with effective communication skills'
      ]
    };
  }
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
