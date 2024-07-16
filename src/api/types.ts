// Enumeradores
export enum Gender {
    Male = 'male',
    Female = 'female'
}

export enum Status {
    Active = 'active',
    Inactive = 'inactive'
}

// Tipos de datos
export interface User {
    id: number;
    name: string;
    email: string;
    gender: Gender;
    status: Status;
}

export interface CreateUserDTO {
    name: string;
    email: string;
    gender: Gender;
    status: Status;
}

export interface UpdateUserDTO {
    name?: string;
    email?: string;
    gender?: Gender;
    status?: Status;
}

