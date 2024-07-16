import { FormikConfig } from 'formik';
import { ObjectShape } from 'yup';

export interface FormikFormConfig<T> extends Omit<FormikConfig<T>, 'validationSchema'> {
    validationSchema: ObjectShape;
}
