<template>
  <div class="experience">
    <CompanyItem :company="data.company"/>
    <h3>{{ data.title }}</h3>
    <div class="subtitle">
      <div class="location">
        <span class="location__country"/>
        <div class="location__title">{{ data.location }}</div>
      </div>
      <div>{{ data.startDate }} - {{ data.endDate }}</div>
    </div>
    <div v-if="data.project" class="project">{{ data.project }}</div>
    <ul class="list">
      <li
          class="list__item"
          v-for="(desc, index) in data.desc" :key="index">
        {{ desc }}
      </li>
    </ul>
    <div class="stack">Stack</div>
    <div class="stack__container">
      <div
          class="stack__item"
          v-for="(item, index) in data.stack" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import CompanyItem from "./CompanyItem";

export default {
  name: 'ExperienceBlock',
  components: {CompanyItem},
  props: ['data']
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.experience {
  margin: 26px 0;
  padding-bottom: 26px;
  border-bottom: 1px solid $gray-225;
}

.subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 18px;
  color: $blue-91;
}

.location {
  display: flex;
}

.location__title {
  margin-left: 6px;
}

.location__country {
  position: relative;
  height: 18px;
  content: url('../assets/rus.png');
}

.project {
  padding-left: 8px;
  font-size: 14px;
  line-height: 24px;
}

.list {
  list-style-type: square;
  padding-inline-end: 40px;
}

.stack {
  font-size: 14px;
  line-height: 18px;
  font-weight: $font-weight-bold;
  margin-bottom: 8px;
}

.stack__container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 24px;
}

.stack__item {
  padding: 4px 8px;
  margin: 4px 2px;
  border-radius: 16px;
  background: $gray-173;
  font-size: 14px;
  line-height: 18px;
  color: $white;
  transition: all .5s ease-in-out;
  box-shadow:  0 0 2px rgba($black,0.3);

  &:hover {
    transform: scale(1.3);
    cursor: pointer;
    box-shadow:  0 0 6px rgba($white,0.7);
  }
}
</style>
