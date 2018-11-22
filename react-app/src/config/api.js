import { create } from 'apisauce';

const api = create({
  // baseURL: process.env.API_BASE_URL,
  baseURL: 'http://localhost:3002',
  timeout: 5000
});

export default api;
