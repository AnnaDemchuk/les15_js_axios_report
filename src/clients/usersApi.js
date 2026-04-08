import { apiClient } from '../utils/instance';

export const getAllUsers = () => apiClient.get('/users');
export const getUsersById = (id) => apiClient.get(`/users/${id}`);
export const createUsers = (body) => apiClient.post('/users', body);
export const updateUsers = (id, body) => apiClient.put(`/users/${id}`, body);
export const deleteUsers = (id) => apiClient.delete(`/users/${id}`);