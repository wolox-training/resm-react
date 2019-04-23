import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

import TechService from '../../services/techsService.js'

const TechBox = () => import('../../components/TechBox')
const TechTitle = () => import('../../components/TechTitle')


import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  components: {
    TechBox,
    TechTitle
  },
  data: {
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
