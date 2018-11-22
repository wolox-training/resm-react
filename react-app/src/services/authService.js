import api from '../config/api';

export const getUser = (email, pass) => api.get('/users', { email, pass });
export const getUsers = id => api.get('/users', { id });

export const authService = { getUser, getUsers };

export default authService;
