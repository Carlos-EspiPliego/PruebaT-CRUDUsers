import { EditUserView } from "@components/EditUserView";
import { MainLayout } from "@layouts/MainLayout"
import { Link } from "react-router-dom";

const BreadcumComponent = () => (
    <div className="flex gap-2">
        <Link to={'/'} className="text-text-body/50 underline hover:text-text-body">Lista de Usuarios</Link>
        <span className="text-text-body">/</span>
        <span className="text-text-title font-semibold">Editar usuario</span>
    </div>
);

export const EditUser = () => {
    return (
        <MainLayout titleText={"Editar usuario"} breadcumbComponent={<BreadcumComponent />}>
            <EditUserView />
        </MainLayout>
    )
}
