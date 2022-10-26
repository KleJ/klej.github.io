<template>
  <div class="sliders">
    <SliderItem
        colorType="red"
        :presetVal="bgColor.red">
    </SliderItem>
    <SliderItem
        colorType="green"
        :presetVal="bgColor.green">
    </SliderItem>
    <SliderItem
        colorType="blue"
        :presetVal="bgColor.blue">
    </SliderItem>
  </div>
  <transition name="fade">
    <div
        v-if="isWarningVisible"
        class="warning">
      <span class="warning__icon"/>
      <span class="warning__text"> White color isn't recommended</span>
      <span class="warning__icon"/>
    </div>
  </transition>
</template>

<script>
import SliderItem from "@/components/SliderItem";

const threshold = 235;

export default {
  name: "ColorComponent.vue",
  components: {SliderItem},
  props: {
    bgColor: {
      red: Number,
      green: Number,
      blue: Number
    }
  },
  computed: {
    isWarningVisible() {
      return this.bgColor.red > threshold && this.bgColor.green > threshold && this.bgColor.blue > threshold;
    }
  }
}
</script>

<style lang="scss" scoped>
.sliders {
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.warning {
  margin: 18px;
  text-align: center;
}

.warning__text {
  margin: 0 12px;
}

.warning__icon {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  content: url('../assets/icons/box-important.png');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>