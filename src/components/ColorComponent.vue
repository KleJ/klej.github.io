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
</template>

<script>
import SliderItem from "@/components/SliderItem";

export default {
  name: "ColorComponent.vue",
  components: {SliderItem},
  props: {
    bgColor: {
      red: Number,
      green: Number,
      blue: Number
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
</style>