import { User } from "@api/types";

export interface UserState {
    users: User[];
    activeUser: User | null;
    loading: boolean;
    error: string | null | undefined;
}