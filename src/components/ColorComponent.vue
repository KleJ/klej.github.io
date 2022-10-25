<template>
  <div class="sliders">
    <SliderItem
        colorType="red"
        @updateColor="updateColor($event,0)"
        :presetVal="defaultPreset[0]">
    </SliderItem>
    <SliderItem
        colorType="green"
        @updateColor="updateColor($event,1)"
        :presetVal="defaultPreset[1]">
    </SliderItem>
    <SliderItem
        colorType="blue"
        @updateColor="updateColor($event,2)"
        :presetVal="defaultPreset[2]">
    </SliderItem>
  </div>
</template>

<script>
import SliderItem from "@/components/SliderItem";

export default {
  name: "ColorComponent.vue",
  components: {SliderItem},
  props: ['bgColor'],
  emits: ['updateFooterColor'],
  created() {
    this.defaultPreset = [...this.bgColor];
  },
  methods: {
    updateColor(newVal, index) {
      this.defaultPreset[index] = newVal;
      this.$emit('updateFooterColor', this.defaultPreset);
    }
  },
  data() {
    return {
      defaultPreset: [119, 136, 153]
    };
  }
}
</script>

<style lang="scss" scoped>
.sliders {
  display: flex;
  justify-content: space-around;
}
</style>