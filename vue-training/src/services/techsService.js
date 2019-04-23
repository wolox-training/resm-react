import api from './api'

const TechService = {
  getTechs: () => api.get('techs')
}

export default TechService
