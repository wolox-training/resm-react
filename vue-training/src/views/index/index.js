import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import { installServiceWorker } from '../../serviceWorkerInstaller'

import { DEFAULT_LANGUAGE as locale } from '../../constants/general'

import TechService from '../../services/techsService'

import messages from '../../translations/i18n.js'

const TechBox = () => import('../../components/TechBox')

import './index.pug'
import './index.scss'

const i18n = new VueI18n({
  locale,
  preserveDirectiveContent: true,
  messages
})

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  i18n,
  components: {
    TechBox
  },
  data: {
    filter: '',
    locale,
    jsonData: {},
    techs: []
  },
  computed: {
    filteredTechs() {
      const { filter } = this
      if (filter) {
        return this.techs.map((techGroup = { techsList: [] }) => {
          const newTechsList = techGroup.techsList.filter(tech => tech.title.toLowerCase().includes(filter.toLowerCase()))
          const newTechGroup = {
            ...techGroup,
            techsList: newTechsList
          }
          return newTechGroup
        })
      }
      return this.techs
    },
    countTechs() {
      const countOfTechs = this.filteredTechs.map((techGroup = { techsList: [] }) => techGroup.techsList.length)
      return countOfTechs.length > 1 ? countOfTechs.reduce((a, b) => a + b) : 0
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
        this.jsonData = response.data
        this.techs = response.data[this.locale]
      })
  }
}).$mount('#app')

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
