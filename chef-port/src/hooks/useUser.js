import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useUser = (key, initVal) => {
    const [message, setMessage] = useLocalStorage(key, initVal);

    useEffect(() => {
        if (message !== undefined) {
           
        }
    })
}