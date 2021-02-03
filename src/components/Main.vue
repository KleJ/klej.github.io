<template>
  <div class="container">
    <div class="header">
      <div class="header__author">{{ author }} </div>
      <div class="header__position">{{ position }}</div>
    </div>
<!--    <div class="main">
      <div class="main__bar">
      </div>

    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      author: 'Mikhail Iaruntcev',
      position: 'Senior Software Engineer'
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.header {
  color: $gold-96;
  margin: 36px 0 72px;
}

.header__author {
  font-size: 32px;
  line-height: 32px;
  font-weight: $font-weight-semi;
  border-bottom: solid 2px;
}

.header__position {
  text-align: right;
  font-size: 16px;
  line-height: 24px;
  font-weight: $font-weight-medium;
}

.main {
  padding: 40px 30px;
  border-radius: 6px;
  background: $white;
}

.main__bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 45px;
  margin-bottom: 40px;
}
</style>
