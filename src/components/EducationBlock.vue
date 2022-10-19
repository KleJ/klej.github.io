<template>
  <div>
    <h3><a :href="data.link" class="name">{{ data.university }}</a></h3>
    <div class="info">
      <span class="location__country"/>
      <div class="location__title">{{ data.location }}, {{ data.endDate }}</div>
    </div>
    <div class="degree">
      {{ data.degree }}, {{ data.area }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationBlock',
  props: ['data']
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.name {
  text-decoration: none;
}

.info {
  display: flex;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 16px;
}

.location__title {
  margin-left: 6px;
}

.location__country {
  position: relative;
  height: 18px;
  content: url('../assets/rus.png');
}

.degree {
  font-weight: $font-weight-semi;
}
</style>
