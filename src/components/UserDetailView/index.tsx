import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { getInitialsName, getStatusClasses } from '../../utils/userTableUtils';

export const UserDetailView = () => {
    const { activeUser } = useSelector((state: RootState) => state.users);

    console.log('Active User:', activeUser);

    return (
        <div className='flex flex-col gap-4 justify-center h-full text-text-body'>
            {activeUser ? (
                <div className='flex flex-col gap-4 items-center'>
                    <div className='flex flex-col justify-center items-center gap-4 p-4 rounded-lg'>
                        <div className='w-32 h-32 bg-primary-500/30 rounded-full flex items-center justify-center'>
                            <p className='text-primary-300 font-semibold text-5xl'>{getInitialsName(activeUser.name)}</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold'>{activeUser.name}</h1>
                            <p className='text-base'>{activeUser.email}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 max-w-md w-full'>
                        <div className='border-b border-line pb-2 text-text-title'>
                            Detalle
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className='flex gap-2'>
                                <p className='text-text-title'>Id:</p>
                                <p className=''>{activeUser.id}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-text-title'>Genero:</p>
                                <p className=''>{(activeUser.gender.toLowerCase()) === 'female' ? 'Femenino' : 'Masculino'}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-text-title'>Status:</p>
                                <p className={getStatusClasses(activeUser.status) }>{(activeUser.status.toLowerCase()) === 'inactive' ? 'Inactivo' : 'Activo'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col gap-4 justify-center items-center h-full'>
                    <p className='text-text-title text-2xl'>No hay un usuario seleccionado</p>
                </div>
            )}
        </div>
    );
};
