// Enumeradores
export enum Gender {
    Default = '',
    Male = 'male',
    Female = 'female'
}

export enum Status {
    Default = '',
    Active = 'active',
    Inactive = 'inactive'
}

// Tipos de datos
export interface User {
    id: number | null | '';
    name: string;
    email: string;
    gender: Gender;
    status: Status;
}

// export interface CreateUserDTO {
//     name: string;
//     email: string;
//     gender: Gender;
//     status: Status;
// }

// export interface UpdateUserDTO {
//     name?: string;
//     email?: string;
//     gender?: Gender;
//     status?: Status;
// }

