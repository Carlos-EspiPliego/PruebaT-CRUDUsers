import { IconEdit, IconEye, IconPlus, IconTrash } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'
import { AppDispatch, RootState } from '@store/store'
import { setActiveUser } from '@store/slices/userSlice'
import { getInitialsName, getStatusClasses } from '@utils/userTableUtils'
import { useRedirect } from '@hooks/useRedirect'
import { deleteUserById } from '@store/slices/thunks'
import { useAlert } from '@hooks/useAlert'
import { User } from '@api/types'

export const tableHeaders = [
    'ID',
    'Usuario',
    'Genero',
    'Estatus',
    'Acciones'
];

export const UserListTable = () => {
    const { users, loading } = useSelector((state: RootState) => state.users)
    const dispatch: AppDispatch = useDispatch();
    const redirectTo = useRedirect();
    const showAlert = useAlert();

    const handleDeleteUser = (id: number | null | '') => {
        if (typeof id === 'number') {
            dispatch(deleteUserById({ id, showAlert }));
        }
    }

    const handleViewUser = (user: User) => {
        dispatch(setActiveUser(user))
        redirectTo(`/ver-usuario/${user.id}`)
    }

    const handleEditUser = (user: User) => {
        dispatch(setActiveUser(user))
        redirectTo(`/editar-usuario/${user.id}`)
    }

    return (
        <div className="relative table__container w-full flex flex-col gap-4">
            {/* Mostrar el total de usuarios */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <h2 className='text-text-title'>Usuarios:</h2>
                    <p className='text-text-body'>{users.length}</p>
                </div>
                {/* Botón para agregar un nuevo usuario */}
                <div>
                    <button onClick={() => redirectTo('/crear-usuario')} className='flex items-center gap-2 bg-primary-500 p-2 px-4 rounded-lg text-text-title hover:bg-primary-600 transform transition-transform duration-300 hover:scale-105'>
                        Añadir
                        <IconPlus stroke={1} />
                    </button>
                </div>
            </div>
            <div className='overflow-auto h-full'>
                <table className="text-text-body min-w-full divide-y divide-gray-200">
                    <thead className='sticky top-0 z-10 bg-container'>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="pb-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                        {
                            loading ? (
                                <tr>
                                    <td colSpan={tableHeaders.length} className="text-center py-4">
                                        Cargando datos...
                                    </td>
                                </tr>
                            ) : (
                                // Validación cuando no hay usuarios
                                users.length === 0 ? (
                                    <tr>
                                        <td colSpan={tableHeaders.length} className="text-center py-4">
                                            Ocurrió un error al cargar los datos
                                        </td>
                                    </tr>
                                ) :
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{user.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className='flex gap-4'>
                                                    {/* Circulo de perfil con la inicial de su nombre */}
                                                    <div className=''>
                                                        <div className='w-10 h-10 bg-primary-500/30 rounded-full flex items-center justify-center'>
                                                            <p className='text-primary-300 font-semibold'>{getInitialsName(user.name)}</p>
                                                        </div>
                                                    </div>
                                                    {/* Sección del nombre y el email */}
                                                    <div className='flex flex-col'>
                                                        <p className='font-semibold text-text-title'>{user.name}</p>
                                                        <p className='text-text-body'>{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                {(user.gender.toLowerCase()) === 'female' ? 'Femenino' : 'Masculino'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={getStatusClasses(user.status)}>
                                                    {(user.status.toLowerCase()) === 'inactive' ? 'Inactivo' : 'Activo'}
                                                </span>
                                            </td>
                                            {/* Sección de las acciones con los iconos de eliminar, editar y ver */}
                                            <td className='px-6 py-4 flex gap-4 items-center justify-center'>
                                                <span
                                                    className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                                                    onClick={() => handleEditUser(user)}
                                                >
                                                    <IconEdit stroke={1} />
                                                </span>
                                                <span
                                                    className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                                                    onClick={() => handleDeleteUser(user.id)}
                                                >
                                                    <IconTrash stroke={1} />
                                                </span>
                                                <span
                                                    className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                                                    onClick={() => handleViewUser(user)}
                                                >
                                                    <IconEye stroke={1} />
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
