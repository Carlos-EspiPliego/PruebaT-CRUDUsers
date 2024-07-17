import { useDispatch } from "react-redux";

import { CreateUserDTO, Gender } from '@api/types';
import { useDataForms } from "@hooks/forms/useDataForms";
import { addUser } from "@store/slices/thunks";
import { AppDispatch } from "@store/store";
import { useAlert } from "@hooks/useAlert";
import { useRedirect } from "@hooks/useRedirect";
import { useFormikForm } from "@hooks/forms/useFormikForm"


export const CreateNewUserForm = () => {
    const { initialValues, validationSchema } = useDataForms()
    const dispatch: AppDispatch = useDispatch();
    const redirectTo = useRedirect();
    const showAlert = useAlert();

    const onSubmit = (values: CreateUserDTO) => {
        console.log(values)
        dispatch(addUser({ user: values, showAlert, formik, redirectTo }))
    }

    const formik = useFormikForm<CreateUserDTO>({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="max-w-3xl m-auto h-full flex flex-col gap-4"
        >
            <div className="block md:flex gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <label
                        className="text-text-body"
                    >
                        Nombre
                    </label>
                    <input
                        autoFocus
                        type="text"
                        required
                        placeholder="Nombre"
                        {...formik.getFieldProps('name')}
                        className="px-4 py-2 bg-input border-inputstroke border rounded-lg text-text-title"
                    />
                    {
                        formik.errors.name && formik.touched.name && (
                            <span className="text-red-500 text-sm">{formik.errors.name}</span>
                        )
                    }
                </div>
            </div>
            <div className="block md:flex gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <label
                        className="text-text-body"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        {...formik.getFieldProps('email')}
                        className="px-4 py-2 bg-input border-inputstroke border rounded-lg text-text-title"
                    />
                    {
                        formik.errors.email && formik.touched.email && (
                            <span className="text-red-500 text-sm">{formik.errors.email}</span>
                        )
                    }
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label
                        className="text-text-body"
                    >
                        Genero
                    </label>
                    <select
                        required
                        onBlur={formik.handleBlur}
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        className="px-4 py-2 bg-input border-inputstroke border rounded-lg text-text-title"
                    >
                        <option value=''>Seleccionar género</option>
                        <option value={Gender.Male}>Masculino</option>
                        <option value={Gender.Female}>Femenino</option>
                    </select>
                    {
                        formik.errors.gender && formik.touched.gender && (
                            <span className="text-red-500 text-sm">{formik.errors.gender}</span>
                        )
                    }
                </div>
            </div>
            {/* Botones */}
            <div
                className="flex h-full items-end gap-4 justify-end"
            >
                <button
                    onClick={formik.handleReset}
                    type="reset"
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-105"
                >
                    Limpiar
                </button>
                <button
                    disabled={!formik.isValid || formik.isSubmitting}
                    type="submit"
                    className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transform transition-transform duration-300 hover:scale-105"
                >
                    Crear
                </button>
            </div>
        </form>
    )
}
