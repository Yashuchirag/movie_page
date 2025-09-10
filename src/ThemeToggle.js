import {useEffect, useState} from 'react';
import './App.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.setAttribute(
            'data-theme', 
            storedTheme
        );
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute(
            'data-theme', 
            newTheme
        );
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;