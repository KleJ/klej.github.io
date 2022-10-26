<template>
  <div class="container">
    <div class="header">
      <div class="header__author">{{ author }}</div>
      <div class="header__position">{{ position }}</div>
    </div>
    <div class="main">
      <section class="main__bar">
        <a href="https://www.linkedin.com/in/iaruntcev/" class="linked">
          <span class="linked__icon"/>
          <span class="linked__text">Linkedin.com/in/iaruntcev</span>
        </a>
        <a :href="`${publicPath}mike_cv.pdf`" class="download" download>
          <span class="download__text">Download CV</span>
          <span class="download__icon"/>
        </a>
      </section>

      <section class="section__profile">
        <h2>Profile</h2>
        <ProfileBlock/>
      </section>

      <section>
        <h2>Experience</h2>
        <ExperienceBlock
            v-for="(work, index) in workLog" :data="work" :key="index"/>
      </section>

      <section>
        <h2>Education</h2>
        <EducationBlock :data="education"/>
      </section>

      <section>
        <h2>Languages</h2>
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
      author: 'Mikhail Iaruntcev',
      position: 'Senior Software Engineer',
      workLog: [
        {
          title: 'Principal Frontend Developer',
          company: {
            name: 'T-Systems',
            link: 'https://www.t-systems.com/',
            type: 'tsys'
          },
          location: 'Saint Petersburg',
          startDate: 'May 2018',
          endDate: 'Present',
          desc: [
            'Working on the project in IoT area',
            'Developed a data marketplace portal completely from scratch. Close collaboration with design team',
            'Created a component base for new projects',
            'Building the application for tracking system based on Cumulocity IoT'
          ],
          stack: ['Vue.js', 'Angular', 'Angular Material', 'TypeScript', 'RxJs', 'Webpack', 'Sass', 'Leaflet', 'Keycloack.js', 'ESLint/Prettier', 'Git', 'Cumulocity']
        },
        {
          title: 'Senior Frontend Developer',
          company: {
            name: 'EPAM Systems',
            link: 'https://www.epam.com/',
            type: 'epam',
          },
          location: 'Saint Petersburg',
          startDate: 'June 2016',
          endDate: 'April 2018',
          desc: [
            'Developed a base framework, to be used for other company projects',
            'Created the analytics widget based on D3.js and Sankey chart',
            'Improved code quality and optimized performance. Applied TDD'
          ],
          stack: [
            'Angular.js', 'Angular', 'Webpack', 'Typescript', 'D3.js', 'Sankey', 'Sass', 'Git', 'Electron.js'
          ]
        },
        {
          title: 'Frontend Developer',
          company: {
            name: 'Nexign',
            link: 'https://nexign.com/',
            type: 'nexign',
          },
          location: 'Samara',
          startDate: 'November 2015',
          endDate: 'February 2016',
          desc: [
            'Development of new version of the system for automated processing of sales operations (SFA)',
            'Contributed to solution design for the new version of SFA system',
            'Applied Test-Driven Development approach',
            'Migrated existing modules to the Angular framework'
          ],
          stack: [
            'Angular.js', 'Webpack', 'Typescript', 'Sass', 'Git'
          ]
        },
        {
          title: 'Frontend Developer',
          company: {
            name: 'Smart Solutions',
            link: 'http://smartsolutions-123.ru/',
            type: 'smart',
          },
          location: 'Samara',
          startDate: 'March 2015',
          endDate: 'November 2015',
          project: 'International project ARUM, adaptive production management',
          desc: [
            'Infographic visualisation by D3.js. Integration of voting system',
            'Developed UI interacting with Restful API for multi-agent scheduler',
            'Created UI/UX for task distribution system for production management'
          ],
          stack: [
            'Angular.js', 'Webpack', 'D3.js', 'Sass/Less', 'Git'
          ]
        },
        {
          title: 'Full Stack Developer',
          company: {
            name: 'WebZavod',
            link: 'https://webzavod.ru/',
            type: 'zavod',
          },
          location: 'Samara',
          startDate: 'January 2011',
          endDate: 'January 2014',
          desc: [
            'Developed and maintained various CMS modules',
            'Designed DB architecture for sites and regional portals of corporate customers',
            'Developed bash and perl scripts for process automation',
            'Integrated third-party modules'
          ],
          stack: [
            'Perl', 'JavaScript', 'jQuery', 'MySQL', 'RegEx', 'Bash'
          ]
        }
      ],
      education: {
        university: 'Samara State Technical University',
        link: 'https://samgtu.com/',
        location: 'Samara',
        endDate: '2012',
        degree: 'Engineer\'s degree',
        area: 'Computer and Information Systems Security'
      },
      languages: [
        {
          lang: 'Russian',
          icon: 'rus',
          level: 'Native'
        },
        {
          lang: 'English',
          icon: 'eng',
          level: 'Upper-Intermediate'
        }
      ],
      isColorSectionVisible: false,
      footerColor: {red: 173, green: 185, blue: 197}
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

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

  section h2 {
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

.download:hover {
  font-weight: $font-weight-medium;
  color: $white;
  background-color: $gray-173;
  border-radius: 2px;
  width: fit-content;

  .download__icon {
    content: url('../assets/download_white.png');
  }
}

.download__icon {
  content: url('../assets/download.png');
  height: 24px;
  padding-right: 2px;
}

.linked__icon {
  content: url('../assets/in.png');
  height: 24px;
}

.linked__text,
.download__text {
  padding: 0 6px;
}

.linked__text:hover {
  $li-color: #0078bd;

  background-color: $li-color;
  border-radius: 0 2px 2px 0;
  color: $white;
  font-weight: $font-weight-medium;
  margin-left: -2px;
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
    content: url('../assets/rus.png');
  }

  &.eng {
    content: url('../assets/eng.png');
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
  .section__profile {
    order: -1;
    margin-bottom: 24px;
  }

  .main__bar {
    flex-direction: column;

    .download__icon {
      order: -1;
    }
  }
}
</style>
