import { createContext, useState } from "react";

export const ThemeContext = createContext()
const ThemeContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    const changeToDarkMode = () => {
    }

        const changeToLightMode = () => {
    }

    const providerValues = {
        isDark,
        toggleTheme,
        changeToDarkMode,
        changeToLightMode
    }

    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider