import { apiClient } from "./apiClient";
import { User, CreateUserDTO, UpdateUserDTO } from './types';

// Funciones API
export const getUsers = async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
};

