import api from '../config/api';

// Implemented for simulate latency of response
export const getUserTrue = obj => api.get('/users', obj);

// export const getUser = obj => api.get('/users', obj);
export const getUser = async obj => new Promise(resolve => setTimeout(() => resolve(getUserTrue(obj)), 5000));

export const setUser = (id, obj) => api.patch(`/users/${id}`, obj);

export const setTokenInHeader = token => api.setHeader('Authorization', token);

export const authService = { getUser, setUser, setTokenInHeader };

export default authService;
