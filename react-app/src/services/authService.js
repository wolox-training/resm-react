import api from '../config/api';

export const getUser = (email, pass) => api.get('/users', { email, pass });
export const getUserByUsername = (username, pass) => api.get('/users', { username, pass });
export const getUsers = id => api.get('/users', { id });

export const authService = { getUser, getUserByUsername, getUsers };

export default authService;
