import { useDispatch } from "react-redux";

import { User } from '@api/types';
import { useDataForms } from "@hooks/forms/useDataForms";
import { addUser } from "@store/slices/thunks";
import { AppDispatch } from "@store/store";
import { useAlert } from "@hooks/useAlert";
import { useRedirect } from "@hooks/useRedirect";
import { useFormikForm } from "@hooks/forms/useFormikForm"
import { UserForm } from "@components/UserForm";


export const CreateNewUserForm = () => {
    const { initialValues, validationSchema } = useDataForms()
    const dispatch: AppDispatch = useDispatch();
    const redirectTo = useRedirect();
    const showAlert = useAlert();

    const onSubmit = (values: User) => {
        console.log(values)
        dispatch(addUser({ user: values, showAlert, formik, redirectTo }))
    }

    const formik = useFormikForm<User>({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <UserForm
            btnText="Crear"
            formik={formik}
        />
    )
}
