import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, CreateUserDTO, UpdateUserDTO } from '@api/types';
import { getUsers, createUser, updateUser, deleteUser } from '@api/userApi';

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/fetch',
    async () => {
    const response = await getUsers(1);
    return response;
})