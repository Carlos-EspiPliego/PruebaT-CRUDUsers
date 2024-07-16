import { User } from "../api/types";

export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null | undefined;
}