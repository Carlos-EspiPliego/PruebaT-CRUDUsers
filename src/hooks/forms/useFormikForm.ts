import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { FormikFormProps } from './types'

export const useFormikForm = <Values extends FormikValues> ({
    initialValues,
    validationSchema,
    onSubmit
}: FormikFormProps<Values>) => {

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object().shape(validationSchema),
        onSubmit: onSubmit,
    });

    return formik ;
}