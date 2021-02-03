<template>
  <div class="container">
    <div class="header">
      <div class="header__author">{{ author }}</div>
      <div class="header__position">{{ position }}</div>
    </div>
    <div class="main">
      <div class="main__bar">
      </div>

      <h2>Profile</h2>
      <Profile/>
      <h2>Experience</h2>
      <Experience
          v-for="(work, index) in workLog" :data="work" :key="index"/>
      <h2>Education</h2>
      <h2>Languages</h2>
      <h2>Skills</h2>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";

export default {
  name: 'Main',
  components: {Experience, Profile},
  data() {
    return {
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
            'Worked on the project in IoT area',
            'Developed a data marketplace portal completely from scratch. Close collaboration with design team',
            'Created a component base for new projects in future. Managed customer requirements and estimated task durations'
          ],
          stack: ['Vue.js/Vuex', 'Angular', 'Angular Material', 'TypeScript', 'RxJs', 'Webpack', 'Sass', 'Leaflet', 'Keycloack.js', 'eslint/prettier', 'Git']
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
            'Angular.js','Angular','Webpack','Typescript','D3.js','Sankey','Sass','Git','Electron.js'
          ]
        }/*,
        {
          title: '',
          company: '',
          type: 'tsys',
          location: '',
          starDate: '',
          endDate: '',
          desc: [
            ''
          ],
          stack: [
            ''
          ]
        },
        {
          title: '',
          company: '',
          type: 'tsys',
          location: '',
          starDate: '',
          endDate: '',
          desc: [
            ''
          ],
          stack: [
            ''
          ]
        },
        {
          title: '',
          company: '',
          type: 'tsys',
          location: '',
          starDate: '',
          endDate: '',
          desc: [
            ''
          ],
          stack: [
            ''
          ]
        }*/
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.header {
  color: $gold-96;
  margin: 36px 0 72px;
}

.header__author {
  font-size: 32px;
  line-height: 32px;
  font-weight: $font-weight-semi;
  border-bottom: solid 2px;
}

.header__position {
  text-align: right;
  font-size: 18px;
  line-height: 26px;
  font-weight: $font-weight-medium;
}

.main {
  padding: 40px 30px;
  border-radius: 6px;
  background: $white;
}

.main__bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 45px;
  margin-bottom: 40px;
}
</style>
