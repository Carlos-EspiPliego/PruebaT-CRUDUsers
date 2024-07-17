import { MainLayout } from "@layouts/MainLayout";

import { CreateNewUserForm } from "@components/CreateNewUserForm";
import { Link } from "react-router-dom";

const BreadcumComponent = () => (
    <div className="flex gap-2">
        <Link to={'/'} className="text-text-body/50 underline hover:text-text-body">Lista de Usuarios</Link>
        <span className="text-text-body">/</span>
        <span className="text-text-title font-semibold">Crear nuevo usuario</span>
    </div>
);

export const CreateNewUser = () => {
    return (
        <MainLayout titleText={"Crear nuevo usuario"} breadcumbComponent={<BreadcumComponent />}>
            <CreateNewUserForm />
        </MainLayout>
    )
}
