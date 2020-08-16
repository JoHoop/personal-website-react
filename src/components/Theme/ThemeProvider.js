import React, { useEffect, useState, createContext } from "react";
import { LightTheme, DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialMode = () => {
        const isReturningUser = "dark" in window.localStorage;
        const savedMode = JSON.parse(window.localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        }
        return !!userPrefersDark;
    };

    const getPrefColorScheme = () => {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [theme, setTheme] = useState(getInitialMode() ? "dark" : "light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        window.localStorage.setItem("dark", JSON.stringify(theme === "dark"));
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            <MuiThemeProvider
                theme={theme === "light" ? LightTheme : DarkTheme}
            >
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
