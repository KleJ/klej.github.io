<template>
  <div class="company">
    <span class="company__name">
      {{ company.name }}
    </span>
    <a :href="company.link">
      <div class="company__logo" :class="company.type"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Company',
  props: ['company']
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.company {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}

.company__name {
  padding: 5px 10px;
  border-radius: 8px;
  background: $blue-2;
  line-height: 22px;
  color: $white;
  font-weight: $font-weight-bold;
}

.company__logo {
  position: relative;
  left: 14px;
  height: 22px;

  &.tsys {
    content: url('../assets/companies/tsys.png');
  }

  &.epam {
    content: url('../assets/companies/epam.png');
  }

  &.nexign {
    content: url('../assets/companies/nexign.png');
  }

  &.smart {
    content: url('../assets/companies/smart.png');
  }

  &.zavod {
    content: url('../assets/companies/zavod.png');
  }
}
</style>
