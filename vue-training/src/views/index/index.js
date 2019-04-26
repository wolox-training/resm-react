import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

import TechService from '../../services/techsService'

const TechBox = () => import('../../components/TechBox')
const TechTitle = () => import('../../components/TechTitle')


import './index.pug'
import './index.scss'

// eslint-disable-next-line no-unused-vars
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
        this.techs = response.data
      })
  }
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
