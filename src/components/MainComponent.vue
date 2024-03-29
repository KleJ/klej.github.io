<template>
  <div class="container">
    <div class="header">
      <div class="header__author">{{ author }}</div>
      <div class="header__position">{{ position }}</div>
    </div>
    <div class="main">
      <section class="main__bar">
        <a
            href="https://www.linkedin.com/in/iaruntcev/"
            target="_blank"
            class="linked">
          <span class="linked__icon"/>
          <span class="linked__text">Linkedin.com/in/iaruntcev</span>
        </a>
        <a
            class="download"
            :href="`${publicPath}mike_cv.pdf`"
            download>
          <span class="download__text">Download CV</span>
          <span class="download__icon"/>
        </a>
      </section>

      <section class="section__profile">
        <h2 class="section-title">Profile</h2>
        <ProfileBlock :descriptions="profile"/>
      </section>

      <section>
        <h2 class="section-title">Experience</h2>
        <ExperienceBlock
            v-for="(work, index) in workLog" :data="work" :key="index"/>
      </section>

      <section>
        <h2 class="section-title">Education</h2>
        <EducationBlock :data="education"/>
      </section>

      <section>
        <h2 class="section-title">Languages</h2>
        <div class="langs">
          <div v-for="(lang, index) in languages" :key="index" class="lang">
            <span class="lang__icon" :class="lang.icon"/>
            <div class="lang__name"><b>{{ lang.lang }}</b> - {{ lang.level }}</div>
          </div>
        </div>
      </section>

      <transition name="fade">
        <section
            v-if="isColorSectionVisible">
          <h2>Color component</h2>
          <ColorComponent
              :bgColor="footerColor">
          </ColorComponent>
        </section>
      </transition>
    </div>
  </div>
  <FooterComponent
      @toggleColorSection="this.isColorSectionVisible = !this.isColorSectionVisible"
      :rgb="rgb">
  </FooterComponent>
</template>

<script>
import emitter from "@/services/emitter";
import cvJson from "@/cv.json";

import EducationBlock from "@/components/EducationBlock";
import ExperienceBlock from "@/components/ExperienceBlock";
import ProfileBlock from "@/components/ProfileBlock";
import ColorComponent from "@/components/ColorComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'MainComponent',
  components: {FooterComponent, EducationBlock, ExperienceBlock, ProfileBlock, ColorComponent},
  created() {
    emitter.on("chgColor", this.updateFooterColor);
  },
  computed: {
    rgb() {
      return `rgb(${this.footerColor.red}, ${this.footerColor.green}, ${this.footerColor.blue})`;
    }
  },
  methods: {
    updateFooterColor({color, value}) {
      this.footerColor[color] = value;
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isColorSectionVisible: false,
      footerColor: {red: 173, green: 185, blue: 197},
      ...cvJson
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$li-color: #0078bd;

.header {
  margin: 36px 0 130px;
  text-shadow: 1px 1px 2px $white
}

.header__author {
  font-size: 32px;
  line-height: 32px;
  font-weight: $font-weight-semi;
  border-bottom: solid 2px $gold-96;
}

.header__position {
  text-align: right;
  font-size: 18px;
  line-height: 26px;
  font-weight: $font-weight-medium;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  border-radius: 6px;
  background: $white;

  .section-title {
    color: v-bind(rgb);
  }
}

.main__bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-direction: row;
}

.linked,
.download {
  display: flex;
  text-decoration: none;
  margin: 6px 0;
}

.download__icon {
  content: url('~@/assets/download.png');
  height: 24px;
  padding-right: 2px;
}

.linked__icon {
  content: url('~@/assets/in.png');
  height: 24px;
}

.linked__text,
.download__text {
  padding: 0 6px;
}

.langs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 36px;
}

.lang {
  display: flex;
  margin: 6px;
}

.lang__icon {
  position: relative;
  height: 24px;

  &.rus {
    content: url('~@/assets/rus.png');
  }

  &.eng {
    content: url('~@/assets/eng.png');
  }
}

.lang__name {
  margin-left: 6px;
}

.fade-enter-active {
  transition: all 0.4s ease-out;
}

.fade-leave-active {
  transition: all 0.6s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .section-title {
    text-align: center;
  }

  .linked,
  .download {
    padding: 6px;
    justify-content: center;
    border-radius: 6px;
  }

  .linked {
    border: 2px solid $li-color;
  }

  .download {
    border: 2px solid $gray-173;
  }

  .section__profile {
    order: -1;
    margin-bottom: 24px;
  }

  .main__bar {
    flex-direction: column;
    justify-content: center;

    .download__icon {
      order: -1;
    }
  }
}

@media screen and (min-width: 600px) {
  .download:hover {
    font-weight: $font-weight-medium;
    color: $white;
    background-color: $gray-173;
    border-radius: 2px;

    .download__icon {
      content: url('~@/assets/download_white.png');
    }
  }

  .linked__text:hover {
    background-color: $li-color;
    border-radius: 0 2px 2px 0;
    color: $white;
    font-weight: $font-weight-medium;
    margin-left: -2px;
  }
}
</style>
