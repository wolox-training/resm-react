import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

import './index.pug'
import './index.scss'

// eslint-disable-next-line
const vm = new Vue({
  el: '#app'
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
