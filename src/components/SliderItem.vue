<template>
  <div class="color__container">
    <h3 class="color__title">
      {{ colorType }}
    </h3>
    <input
        class="slider"
        :class="colorType"
        @input="changeColor($event)"
        type="range"
        :id="colorType"
        :name="colorType"
        :value="presetVal"
        min="0"
        max="255">
  </div>
</template>

<script>
import emitter from "@/services/emitter";

export default {
  name: 'SliderItem',
  props: {
    colorType: String,
    presetVal: Number
  },
  data() {
    return {
      preset: {
        red: 0,
        green: 0,
        blue: 0
      }
    };
  },
  created() {
    this.preset[this.colorType] = this.presetVal;
  },
  computed: {
    rgb() {
      return `rgb(${this.preset.red}, ${this.preset.green}, ${this.preset.blue})`;
    }
  },
  methods: {
    changeColor(event) {
      const value = +(event.target.value);
      this.preset[this.colorType] = value;
      emitter.emit("chgColor", { color: this.colorType, value });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.color__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 36px;

  @media screen and (max-width: 768px) {
    margin: 24px 12px;
  }
}

.color__title {
  text-align: center;
  font-weight: $font-weight-bold;
  font-size: $larger-font-size;
  color: v-bind(rgb);
}

.slider {
  -webkit-appearance: none;
  opacity: 0.5;
  -webkit-transition: .5s;
  transition: opacity .5s;
  height: 8px;
  border-radius: 5px;
  outline: none;
  margin: 12px 0;

  &.red {
    background-color: red;
  }
  &.green {
    background-color: green;
  }
  &.blue {
    background-color: blue;
  }

}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  outline: gray solid 1px;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  outline: gray solid 1px;
}
</style>
