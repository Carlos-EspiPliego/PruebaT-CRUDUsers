import { User } from "@api/types";
import { AlertOptions } from "@hooks/useAlert";
import { FormikHelpers } from "formik";

export interface AddUserParams {
    user: User;
    showAlert: (options: AlertOptions) => void;
    formik: FormikHelpers<User>;
    redirectTo: (path: string) => void;
}

export interface DeleteUserParams {
    id: number;
    showAlert: (options: AlertOptions) => void;
}

export interface UpdateUserParams {
    user: User;
    showAlert: (options: AlertOptions) => void;
    formik: FormikHelpers<User>;
    redirectTo: (path: string) => void;
}