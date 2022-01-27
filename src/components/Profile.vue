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
          'Qualified Front-End Developer with 10+ years of hands-on experience in commercial software development',
          'Vast experience with modern frameworks (Vue.js, Angular), module bundlers, version control systems, and excellent JavaScript knowledge',
          'Passionate about software development and striving for a quality start from project configuration to the code review process',
          'Great team player with excellent communication skills'
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
