import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '@ui';
import { UserDetailView } from '@components';

const BreadcumComponent = () => (
    <div className="flex gap-2">
        <Link to={'/'} className="text-text-body/50 underline hover:text-text-body">Lista de Usuarios</Link>
        <span className="text-text-body">/</span>
        <span className="text-text-title font-semibold">Detalle de usuario</span>
    </div>
);

export const UserDetails = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <MainLayout titleText={"Detalle de usuario"} breadcumbComponent={<BreadcumComponent />}>
            <UserDetailView idUser={id} />
        </MainLayout>
    )
}
