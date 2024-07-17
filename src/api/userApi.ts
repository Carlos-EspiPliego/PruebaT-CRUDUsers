import { apiClient } from "./apiClient";
import { User } from './types';

// Funciones API
// Obtener todos los usuarios
export const getUsers = async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>(`?per_page=30`);
    return response.data;
}

// Crear un usuario
export const createUser = async (user: User): Promise<User> => {
    const response = await apiClient.post<User>('/', user);
    return response.data;
}

// Actualizar un usuario
export const updateUser = async (id: number, user: User): Promise<User> => {
    const response = await apiClient.put<User>(`/${id}`, user);
    return response.data;
}

// Eliminar un usuario
export const deleteUser = async (id: number): Promise<void> => {
    await apiClient.delete(`/${id}`);
}