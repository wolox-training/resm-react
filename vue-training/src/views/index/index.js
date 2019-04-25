import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

import TechService from '../../services/techsService.js'

const MessageNoData = () => import('../../components/MessageNoData')
const TechBox = () => import('../../components/TechBox')

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  components: {
    MessageNoData,
    TechBox
  },
  data: {
    filter: '',
    techs: []
  },
  computed: {
    filteredTechs() {
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
      const countOfTechs = this.filteredTechs && this.filteredTechs.map(techGroup => techGroup && techGroup.techsList.length)
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
  created() {
    TechService.getTechs()
      .then(response => {
        vm.techs = response.data
      })
  }
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
