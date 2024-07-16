import { apiClient } from "./apiClient";
import { User, CreateUserDTO, UpdateUserDTO } from './types';

// Funciones API
// Obtener todos los usuarios
export const getUsers = async (page: number = 1, limit: number = 5): Promise<User[]> => {
    const response = await apiClient.get<User[]>(`?page=${page}&limit=${limit}`);
    return response.data;
}

// Crear un usuario
export const createUser = async (user: CreateUserDTO): Promise<User> => {
    const response = await apiClient.post<User>('/', user);
    return response.data;
}

// Actualizar un usuario
export const updateUser = async (id: number, user: UpdateUserDTO): Promise<User> => {
    const response = await apiClient.put<User>(`/${id}`, user);
    return response.data;
}

// Eliminar un usuario
export const deleteUser = async (id: number): Promise<void> => {
    await apiClient.delete(`/${id}`);
}