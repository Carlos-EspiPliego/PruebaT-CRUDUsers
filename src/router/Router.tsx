import { Routes, Route, Navigate } from 'react-router-dom'
import { UserList } from '@pages/UserList'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='*' element={<Navigate to={'/'} /> } />

        </Routes>
    )
}
