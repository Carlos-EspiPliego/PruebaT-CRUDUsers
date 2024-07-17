import { Routes, Route, Navigate } from 'react-router-dom'
import { UserList } from '@pages/UserList'
import { CreateNewUser } from '@pages/CreateNewUser'
import { UserDetails } from '@pages/UserDetails'

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
