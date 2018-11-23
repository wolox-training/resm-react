import { create } from 'apisauce';

const api = create({
  // TODO: process.env.API_BASE_URL Not works
  // baseURL: process.env.API_BASE_URL,
  baseURL: 'http://localhost:3002',
  timeout: 5000
});

export default api;
