import { FormikProps } from 'formik';
import { User } from '@api/types';

export interface UserFormProps {
    btnText: string;
    formik: FormikProps<User>;
}
