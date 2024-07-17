import * as Yup from 'yup';
import { CreateUserDTO, Gender, Status } from '../../api/types';

export const useDataForms = () => {

    const initialValues: CreateUserDTO = {
        name: '',
        email: '',
        gender: Gender.Default,
        status: Status.Active,
    }

    const validationSchema = {
        name: Yup.string().required('El nombre es requerido')
            .min(3, 'El nombre debe tener al menos 3 caracteres')
            .max(50, 'El nombre debe tener como máximo 50 caracteres'),
        email: Yup.string().required('El email es requerido')
            .email('El email no es válido'),
        gender: Yup.string().required('El género es requerido'),
    };

    return {
        initialValues,
        validationSchema
    }
}