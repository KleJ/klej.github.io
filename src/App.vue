<template>
  <div id="app" class="app">
    <Main/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue';

export default {
  name: 'App',
  components: {Main}
}
</script>

<style lang="scss">
@import "styles/styles";

.app {
  position: relative;
}

.app::before {
  position: absolute;
  content: '';
  height: $background-height;
  width: 100%;
  background-image: url("./assets/karelia.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: ellipse(125% 100% at 50% 0);
}
</style>
