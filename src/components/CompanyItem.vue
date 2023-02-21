<template>
  <div class="company">
    <span class="company__name">
      {{ company.name }}
    </span>
    <a
        :href="company.link"
        class="company__logo">
      <img
          class="company__logo--img"
          :src="imagePath"
          :alt="company.name"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CompanyItem',
  props: ['company'],
  computed: {
    imagePath() {
      return require('@/assets/companies/' + this.company.type + '.png');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.company {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  line-height: 22px;
}

.company__name {
  padding: 5px 10px;
  border-radius: 8px;
  background: $blue-2;
  color: $white;
  font-weight: $font-weight-bold;
}

.company__logo {
  margin-left: 14px;
  height: 22px;

  .company__logo--img {
    max-height: 22px;
    vertical-align: middle;
    transition: 1s;

    &:hover {
      max-height: 28px;
    }
  }
}
</style>
