import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

import TechService from '../../services/techsService'

const TechBox = () => import('../../components/TechBox')

import './index.pug'
import './index.scss'

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: '#app',
  components: {
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
        newTechs = newTechs.map((techGroup = { techsList: [] }) => {
          const newTechsList = techGroup.techsList.filter(tech => tech.title.toLowerCase().includes(filter.toLowerCase()))
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
      const countOfTechs = this.filteredTechs.map((techGroup = { techsList: [] }) => techGroup.techsList.length)
      return countOfTechs.length > 1 ? countOfTechs.reduce((a, b) => a + b) : 0
    }
  },
  created() {
    TechService.getTechs()
      .then(response => {
        this.techs = response.data
      })
  }
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
