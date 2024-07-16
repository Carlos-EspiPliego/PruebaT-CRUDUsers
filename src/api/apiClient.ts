import axios, { AxiosError } from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/users', // URL base de la API
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
});

// Interceptores
apiClient.interceptors.request.use(
    response => response,
    (error: AxiosError) => {
        if (error.response) {
            // El servidor respondió con un estado fuera del rango 2xx
            console.error("Error de respuesta del servidor:", error.response.status, error.response.data);
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error("No se recibió respuesta para la solicitud:", error.request);
        } else {
            // Algo más causó el error
            console.error("Error al configurar la solicitud:", error.message);
        }
        return Promise.reject(error);
    }
);
