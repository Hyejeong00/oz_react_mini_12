import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
