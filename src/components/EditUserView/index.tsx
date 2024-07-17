import { useDispatch } from "react-redux"

import { User } from "@api/types"
import { UserForm } from "@components/UserForm"
import { updateUser } from "@store/slices/thunks"
import { AppDispatch } from "@store/store";
import { useAlert } from "@hooks/useAlert";
import { useRedirect } from "@hooks/useRedirect";
import { useDataForms } from "@hooks/forms/useDataForms";
import { useFormikForm } from "@hooks/forms/useFormikForm";

export const EditUserView = () => {
    const { initialValues, validationSchema } = useDataForms()
    const dispatch: AppDispatch = useDispatch();
    const redirectTo = useRedirect();
    const showAlert = useAlert();

    const onSubmit = (values: User) => {
        dispatch(updateUser({ user: values, showAlert, formik, redirectTo }))
    }
    
    const formik = useFormikForm<User>({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <UserForm
            btnText="Editar"
            formik={formik}
        />
    )
}
