import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/users', // URL base de la API
    headers: {
        'Content-Type': 'application/json',
    }
});

