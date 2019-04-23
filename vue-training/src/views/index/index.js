import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

import TechService from '../../services/techsService.js'

const TechTitle = () => import('../../components/TechTitle')
const TechBox = () => import('../../components/TechBox')


import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  components: {
    TechTitle,
    TechBox
  },
  data: {
    titulo: 'Developer Tools',
    techs: []
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
