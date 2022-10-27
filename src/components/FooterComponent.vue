<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__block">
        <div class="footer__item">
          <a
              class="footer__item-link"
              href="https://www.linkedin.com/in/iaruntcev/">
            <span class="footer_item--icon icon-linkedin"/>
            <span class="footer__item--text">linkedin.com/in/iaruntcev</span>
          </a>
        </div>
        <div class="footer__item">
          <a
              class="footer__item-link"
              href="mailto:yaruntsev@gmail.com">
            <span class="footer_item--icon icon-mail"/>
            <span class="footer__item--text">yaruntsev@gmail.com</span>
          </a>
        </div>
        <div class="footer__item">
          <a
              class="footer__item-link"
              :href="`${publicPath}mike_cv.pdf`"
              download>
            <span class="footer_item--icon icon-cv"/>
            <span class="footer__item--text">download CV</span>
          </a>
        </div>
      </div>
      <div class="footer__block footer__block--right">
        <div class="footer__item">
          <a
              title="Click to show or hide color sliders"
              class="footer__item-link"
              @click="$emit('toggleColorSection')">
            <span class="footer__item--text">change color</span>
            <span class="footer_item--icon icon-paint"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent.vue",
  props: {
    rgb: String
  },
  emits: ['toggleColorSection'],
  data() {
    return {
      publicPath: process.env.BASE_URL,
      email: 'yaruntsev@gmail.com',

    };
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.footer {
  display: flex;
  justify-content: center;
  background-color: v-bind(rgb);
}

.footer__container {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  max-width: $container-width;
  padding: 36px 42px;
}

.footer__item {
  margin: 24px 0;

  &:hover .footer_item--icon{
    scale: 1.2;
  }
}

.footer__item-link {
  cursor: pointer;
  color: $white;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    text-decoration-color: initial;
  }
}

.footer_item--icon {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  transition: .5s ease-in-out;

  &.icon-cv {
    content: url('../assets/icons/download-circled.png');
  }

  &.icon-mail {
    content: url('../assets/icons/mail-circled.png');
  }

  &.icon-linkedin {
    content: url('../assets/icons/linkedin-circled.png');
  }

  &.icon-paint {
    content: url('../assets/icons/paint-roller.png');
  }
}

.footer__item--text {
  margin: 0 12px;
}

@media screen and (max-width: 600px) {
  .footer__container {
    flex-direction: column;
  }

  .footer__block--right .footer__item-link {
    display: flex;

    .footer_item--icon {
      order: -1;
    }
  }
}
</style>
