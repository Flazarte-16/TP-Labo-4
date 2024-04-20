import { useState } from "react";

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme');
    };

    return {isDarkMode, toggleTheme};
}