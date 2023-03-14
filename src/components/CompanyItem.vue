<template>
  <div class="company">
    <span class="company__name">
      {{ company.name }}
    </span>
    <a
        ref="link"
        class="company__link"
        :href="company.link"
        target="_blank">
      <img
          class="company__logo"
          :src="imagePath"
          :alt="company.name"/>
      <svg :width="width+10" height="44" xmlns="http://www.w3.org/2000/svg">
        <rect x='5' y='5' rx="5" fill='none' :width="width" height='34'/>
      </svg>
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
  },
  data() {
    return {
      width: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.width = this.$refs.link.clientWidth;
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.company {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.company__name {
  padding: 5px 10px;
  border-radius: 8px;
  background: $blue-2;
  color: $white;
  font-weight: $font-weight-bold;
}

.company__link {
  margin-left: 12px;
  transition: 1s;
  position: relative;
  padding: 4px 6px;

  .company__logo {
    max-height: 22px;
    vertical-align: middle;
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

@media screen and (max-width: 600px) {
  .company {
    justify-content: space-between;
  }
}

@media screen and (min-width: 600px) {
  .company__link:hover {
    transform: scale(1.3) translateX(15px);
    cursor: pointer;

    svg rect {
      stroke: $blue-2;
      stroke-width: 2;
      stroke-dasharray: 500 0;
    }
  }
}
</style>
