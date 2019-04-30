import { create } from 'apisauce'

const api = create({
  baseURL: process.env.API_URL
})

export default api
