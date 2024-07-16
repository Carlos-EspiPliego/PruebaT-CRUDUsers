import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../types';
import { User } from '../../api/types';
import { fetchUsers } from './thunks';

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
        })
    }
})

export const { setUsers, setError, setLoading } = userSlice.actions