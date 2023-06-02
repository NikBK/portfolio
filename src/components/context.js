import { createContext, useContext, useState } from "react";

const ThemeContextProvider = createContext();

export function useTheme() {
    return useContext(ThemeContextProvider);
}

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const handleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark");
    };
    return (
        <ThemeContextProvider.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContextProvider.Provider>
    )
}
export default ThemeContext;