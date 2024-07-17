import { FormikConfig } from 'formik';

export interface FormikFormProps<Values> {
    initialValues: Values;
    validationSchema: Values;
    onSubmit: FormikConfig<Values>['onSubmit'];
}
