import { IconEdit, IconEye, IconPlus, IconTrash } from '@tabler/icons-react'

import './index.scss'


export const UserListTable = () => {
    return (
        <div className="relative table__container w-full flex flex-col gap-4">
            {/* Mostrar el total de usuarios */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <h2 className='text-text-title'>Users:</h2>
                    <p className='text-text-body'>1</p>
                </div>
                {/* Botón para agregar un nuevo usuario */}
                <div>
                    <button className='flex items-center gap-2 bg-primary-500 p-2 px-4 rounded-lg text-text-title'>
                        Añadir
                        <IconPlus stroke={1} />
                    </button>
                </div>
            </div>
            <div className='overflow-auto h-full'>
                <table className="text-text-body min-w-full divide-y divide-gray-200">
                    <thead className='sticky top-0 z-10 bg-container'>
                        <tr>
                            <th className="pb-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="pb-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                            <th className="pb-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genero</th>
                            <th className="pb-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estatus</th>
                            <th className="pb-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                        {/* {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))} */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <div className='flex gap-4'>
                                    {/* Circulo de perfil con la inicial de su nombre */}
                                    <div className=''>
                                        <div className='w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center'>
                                            <p className='text-white font-semibold'>JD</p>
                                        </div>
                                    </div>
                                    {/* Sección del nombre y el email */}
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-text-title'>John Doe</p>
                                        <p className='text-text-body'>john@email.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Female</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className='p-2 rounded-lg bg-green-500/10 text-green-500 font-semibold'>
                                    Activo
                                </span>
                                <span className='p-2 rounded-lg bg-red-500/10 text-red-500 font-semibold'>
                                    Inactivo
                                </span>
                            </td>
                            {/* Sección de las acciones con los iconos de eliminar, editar y ver */}
                            <td className='px-6 py-4 flex gap-4 items-center justify-center'>
                                <span
                                    className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                                >
                                    <IconEdit stroke={1} />
                                </span>
                                <span
                                    className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                                >
                                    <IconTrash stroke={1} />
                                </span>
                                <span
                                    className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                                >
                                    <IconEye stroke={1} />
                                </span>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
