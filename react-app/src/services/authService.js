import api from '../config/api';

export const getUser = obj => api.get('/users', obj);

export const setUser = (id, obj) => api.patch(`/users/${id}`, obj);

export const setTokenInHeader = token => api.setHeader('Authorization', token);

export const authService = { getUser, setUser, setTokenInHeader };

export default authService;
