// función para obtener la primera letra del nombre y aprellido
export const getInitialsName = (name: string): string => {
    const words: string[] = name.trim().split(' ');

    const firstNameInitial = words[0] ? words[0][0].toUpperCase() : '';
    const lastNameInitial = words[1] ? words[1][0].toUpperCase() : '';

    return firstNameInitial + lastNameInitial;
}

export const getStatusClasses = (status: string): string => {
    if (status.toLowerCase() === 'active') {
        return 'p-2 rounded-lg bg-green-500/10 text-green-500 font-semibold';
    } else if (status.toLowerCase() === 'inactive') {
        return 'p-2 rounded-lg bg-red-500/10 text-red-500 font-semibold';
    }
    return 'p-2 rounded-lg bg-gray-500/10 text-gray-500 font-semibold'; // Caso por defecto
}