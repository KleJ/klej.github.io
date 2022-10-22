<template>
  <div class="company">
    <span class="company__name">
      {{ company.name }}
    </span>
    <a
        :href="company.link"
        class="company__logo">
      <img class="company__logo--img" :class="company.type" :alt="company.name"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CompanyItem',
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
  }

  .tsys {
    content: url('../assets/companies/tsys.png');
  }

  .epam {
    content: url('../assets/companies/epam.png');
  }

  .nexign {
    content: url('../assets/companies/nexign.png');
  }

  .smart {
    content: url('../assets/companies/smart.png');
  }

  .zavod {
    content: url('../assets/companies/zavod.png');
  }
}
</style>
