import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return (JSON.parse(localStorage.getItem(key)));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setStoredValue];
}
export default useLocalStorage;