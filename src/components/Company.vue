<template>
  <div class="company">
    <span class="company__name">
      {{ name }}
    </span>
    <div class="company__logo" :class="type"></div>
  </div>
</template>

<script>
export default {
  name: 'Company',
  props: ['name', 'type']
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
  font-size: $font-weight-bold;
}

.company__logo {
  position: relative;
  left: 14px;
  height: 22px;

  &.tsys {
    content: url('../assets/companies/tsys.png');
  }

  //&.bookingcom {
  //  content: url('../assets/BOOKINGCOM.svg');
  //}
  //
  //&.holidu {
  //  content: url('../assets/HOLIDU.svg');
  //}
}
</style>
