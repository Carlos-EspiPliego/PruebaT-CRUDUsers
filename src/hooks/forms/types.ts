import { FormikConfig } from 'formik';
import * as Yup from 'yup';

export interface FormikFormProps<Values> {
    initialValues: Values;
    validationSchema: Values;
    onSubmit: FormikConfig<Values>['onSubmit'];
}
