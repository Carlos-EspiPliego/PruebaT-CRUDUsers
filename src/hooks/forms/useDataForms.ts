import * as Yup from 'yup';
import { Gender, Status, User } from '@api/types';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export const useDataForms = () => {
    const { activeUser } = useSelector((state: RootState) => state.users);

    let initialValues: User = {
        id: '',
        name: '',
        email: '',
        gender: Gender.Default,
        status: Status.Active,
    }

    if (activeUser) {
        initialValues = {
            id: activeUser.id,
            name: activeUser.name,
            email: activeUser.email,
            gender: activeUser.gender,
            status: activeUser.status,
        }
    }

    const validationSchema = {
        name: Yup.string().required('El nombre es requerido')
            .min(3, 'El nombre debe tener al menos 3 caracteres')
            .max(50, 'El nombre debe tener como máximo 50 caracteres'),
        email: Yup.string().required('El email es requerido')
            .email('El email no es válido'),
        gender: Yup.string().required('El género es requerido'),
        status: Yup.string().required('El estado es requerido')
    };

    return {
        initialValues,
        validationSchema
    }
}