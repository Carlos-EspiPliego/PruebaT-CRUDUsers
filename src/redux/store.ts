import { configureStore, Reducer } from "@reduxjs/toolkit";
import { userSlice } from './';
import { UserState } from "./types";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer as Reducer<UserState>
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;