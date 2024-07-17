import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, CreateUserDTO, UpdateUserDTO } from '@api/types';
import { getUsers, createUser, updateUser, deleteUser } from '@api/userApi';
import axios from 'axios';
import { AlertOptions } from '../../hooks/useAlert';
import { FormikHelpers } from 'formik';

interface AddUserParams {
    user: CreateUserDTO;
    showAlert: (options: AlertOptions) => void;
    formik: FormikHelpers<CreateUserDTO>;
    redirectTo: (path: string) => void;
}

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/fetch',
    async () => {
        console.log("fetchUsers");
        const response = await getUsers(1);
        return response;
    }
)

export const addUser = createAsyncThunk<User, AddUserParams, { rejectValue: string }>(
    'users/add',
    async ({ user, showAlert, formik, redirectTo }, { rejectWithValue }) => {
        try {
            const response: User = await createUser(user);
            console.log("addUser Response: ", response);
            if (response) {
                showAlert({
                    title: 'Usuario registrado',
                    text: 'El usuario se ha creado correctamente',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    callback: () => {
                        formik.resetForm();
                        redirectTo('/');
                    }
                });
            }
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                showAlert({
                    title: 'No se pudo crear el usuario',
                    text: error.response.data.message || 'Ocurrió un error inesperado. Por favor intenta más tarde.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    callback: () => {
                        formik.resetForm();
                    }
                });
                return rejectWithValue(error.response.data.message || 'Failed to add user. Please try again later.');
            }
            return rejectWithValue('Ocurrió un error al crear un usuario. Por favor intenta más tarde');
        }
    }
)