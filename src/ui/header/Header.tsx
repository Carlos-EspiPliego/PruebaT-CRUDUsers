import LogoUsers from '@images/users-logo.png'
import { useRedirect } from '@hooks/useRedirect'

export const Header = () => {
    const redirectTo = useRedirect();

    return (
        <header className='bg-container h-16 text-text-body flex justify-center items-center'>
            <figure className='h-16 flex items-center cursor-pointer' onClick={() => redirectTo('/prueba')}>
                <picture>
                    <source srcSet={LogoUsers} type='image/webp' />
                    <img
                        title='Logo de usuarios'
                        alt='Logo de usuarios'
                        src={LogoUsers}
                        className='h-16 transform transition-transform duration-300 hover:scale-105'
                    />
                </picture>
                <figcaption className='sr-only'>Logo de usuarios</figcaption>
            </figure>
        </header>
    )
}
