import api from '../config/api';

export const getUser = (email, pass) => api.get('/users', { email, pass });
export const getUsers = id => api.get('/users', { id });

export const setUser = (id, property, value) => api.patch(`/users/${id}`, { [property]: value });

export const setTokenInHeader = token => api.setHeader('Authorization', token);

export const authService = { getUser, getUsers, setUser, setTokenInHeader };

export default authService;
