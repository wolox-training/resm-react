import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import { installServiceWorker } from '../../serviceWorkerInstaller'

import TechService from '../../services/techsService.js'

import TRANSLATIONS from '../../translations/i18n.js'

const MessageNoData = () => import('../../components/MessageNoData')
const TechBox = () => import('../../components/TechBox')
const TechTitle = () => import('../../components/TechTitle')

import './index.pug'
import './index.scss'

const i18n = new VueI18n({
  locale: 'en',
  preserveDirectiveContent: true,
  messages: TRANSLATIONS
})

const vm = new Vue({
  i18n,
  components: {
    MessageNoData,
    TechBox,
    TechTitle
  },
  data: {
    filter: '',
    locale: 'en',
    jsonData: {},
    techs: []
  },
  computed: {
    filterTechs() {
      let newTechs = this.techs
      const { filter } = this

      if (filter) {
        newTechs = newTechs.map(techGroup => {
          const newTechsList = techGroup && techGroup.techsList.filter(tech => tech.title.toLowerCase().includes(filter.toLowerCase()))
          const newTechGroup = {
            ...techGroup,
            techsList: newTechsList
          }
          return newTechGroup
        })
      }

      return newTechs
    },
    countTechs() {
      const countOfTechs = this.filterTechs && this.filterTechs.map(techGroup => techGroup && techGroup.techsList.length)
      let countTotal = 0
      if (countOfTechs && countOfTechs.length > 0 && countOfTechs.reduce) {
        countTotal = countOfTechs.reduce((a, b) => a + b)
      }
      return countTotal
    },
    haveData() {
      return this.countTechs > 0
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
      vm.techs = vm.jsonData[this.locale]
    }
  },
  created() {
    TechService.getTechs()
      .then(response => {
        vm.jsonData = response.data
        vm.techs = response.data[this.locale]
      })
  }
}).$mount('#app')

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
