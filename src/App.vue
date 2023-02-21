<template>
  <MainComponent/>
</template>

<script>
import MainComponent from "./components/MainComponent";

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style lang="scss">
@import "styles/styles.scss";

#app {
  position: relative;
}

#app::before {
  position: absolute;
  content: '';
  height: $background-height;
  width: 100%;
  background-image: url('~@/assets/karelia.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: ellipse(125% 100% at 50% 0);
}
</style>
