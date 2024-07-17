import { FormikConfig } from 'formik';
import { ObjectShape } from 'yup';

export interface FormikFormProps<Values> {
    initialValues: Values;
    validationSchema: ObjectShape;
    onSubmit: FormikConfig<Values>['onSubmit'];
}
