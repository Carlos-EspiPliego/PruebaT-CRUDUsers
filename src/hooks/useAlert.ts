import Swal from "sweetalert2";

export interface AlertOptions {
    title: string;
    text: string;
    icon: 'success' | 'error' | 'warning' | 'info' | 'question';
    confirmButtonText: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    callback?: () => void;
}

export const useAlert = () => {
    const showAlert = ({
        title,
        text,
        icon,
        confirmButtonText,
        showCancelButton = false,
        cancelButtonText = 'Cancel',
        callback,
    }: AlertOptions) => {
        Swal.fire({
            title,
            text,
            icon,
            confirmButtonText,
            showCancelButton,
            cancelButtonText,
        }).then((result) => {
            if (result.isConfirmed && callback) {
                callback();
            }
        });
    };

    return showAlert;
};