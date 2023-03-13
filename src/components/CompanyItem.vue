<template>
  <div class="company">
    <span class="company__name">
      {{ company.name }}
    </span>
    <a
        :href="company.link"
        target="_blank"
        class="company__logo">
      <img
          ref="image"
          class="company__logo--img"
          :src="imagePath"
          :alt="company.name"/>
      <svg :width="width" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect x='0' y='0' fill='none' :width="width" height='32'/>
      </svg>
    </a>
  </div>
</template>

<script>
const FRAME = 10;

export default {
  name: 'CompanyItem',
  props: ['company'],
  computed: {
    imagePath() {
      return require('@/assets/companies/' + this.company.type + '.png');
    }
  },
  data() {
    return {
      width: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.width = this.$refs.image.clientWidth + FRAME;
    }, 100);
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

  a {
    position: relative;
  }
}

svg {
  position: absolute;
  top: -5px;
  left: -5px;
}

svg rect {
  transition: all 0.8s ease-in-out;
  stroke-dasharray: 0 500;
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
  transition: 1s;

  .company__logo--img {
    max-height: 22px;
    vertical-align: middle;
  }
}

@media screen and (max-width: 600px) {
  .company {
    justify-content: space-between;
  }
}

@media screen and (min-width: 600px) {
  .company__logo:hover {
    transform: scale(1.3) translateX(15px);

    svg rect {
      stroke: $blue-2;
      stroke-width: 3;
      stroke-dasharray: 500 0;
    }
  }
}
</style>
