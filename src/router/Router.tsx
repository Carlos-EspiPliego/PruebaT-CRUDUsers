import { Routes, Route, Navigate } from 'react-router-dom'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<>Hola</>} />
            <Route path='*' element={<Navigate to={'/'} /> } />

        </Routes>
    )
}
