import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
            setIsLoading(false);
        } catch(e) {
            setError(e.message);
            console.error(`Произошла ошибка: ${e.message}`)
        } finally {
            setIsLoading(false);
        }

    }

    return { isLoading, error, fetching};
}