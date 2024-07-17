import { Routes, Route, Navigate } from 'react-router-dom'
import { UserList, CreateNewUser, UserDetails } from '@pages'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/crear-usuario' element={<CreateNewUser />} />
            <Route path='/ver-usuario/:id' element={<UserDetails />} />

            <Route path='*' element={<Navigate to={'/'} /> } />
        </Routes>
    )
}
