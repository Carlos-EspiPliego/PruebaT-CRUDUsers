import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { FormikFormConfig } from './types'

export const useFormikForm = <T extends FormikValues> ( config: FormikFormConfig<T> ) => {
    
    const { initialValues, validationSchema, onSubmit } = config;

    const formik = useFormik<T>({
        initialValues: initialValues,
        validationSchema: Yup.object().shape(validationSchema),
        onSubmit: onSubmit,
    });

    return formik;
}