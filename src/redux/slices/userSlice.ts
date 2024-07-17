import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../types';
import { User } from '../../api/types';
import { fetchUsers, addUser, deleteUserById } from './thunks';

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }),
            builder.addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.loading = false;
            }),
            builder.addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                console.log("Error Action Payload: ", action.payload)
                state.error = action.payload;
            });

        builder.addCase(deleteUserById.pending, (state) => {
            state.loading = true;
            state.error = null;
        }),
            builder.addCase(deleteUserById.fulfilled, (state, action: PayloadAction<number>) => {
                state.users = state.users.filter(user => user.id !== action.payload);
                state.loading = false;
            }),
            builder.addCase(deleteUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const { setUsers, setError, setLoading } = userSlice.actions