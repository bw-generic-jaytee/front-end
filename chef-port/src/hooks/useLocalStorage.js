import {useState} from 'react';

export const useLocalStorage = (key, initVal) => {
    const [storedVal, setStoredVal] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initVal
    })

    const setVal = val => {
        setStoredVal(val);
        window.localStorage.setItem(key, JSON.stringify(val))
    }
    return [storedVal, setVal]
}