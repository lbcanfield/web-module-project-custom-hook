import useLocalStorage from './useLocalStorage';


export const useDarkMode = (key, initialValue) => {
    // const [darkMode, setDarkMode] = useState(initialValue);
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    return [darkMode, setDarkMode];
}

export default useDarkMode;
