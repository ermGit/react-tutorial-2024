import {useEffect, useState} from "react";

const userApiUrl = 'https://jsonplaceholder.typicode.com/users';

export function useFetchUser(userId) {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        fetch(`${userApiUrl}/${userId}`, {signal: controller.signal})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setError(null);
            setUserData(data);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });

        return () => {
            controller.abort();
            setLoading(false);
        }
    }, [userId]);

    return {user: userData, loading, error};
}