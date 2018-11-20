import api from '../config/api';

export default {
  getUsers: id => api.get('/users', { id })
};
