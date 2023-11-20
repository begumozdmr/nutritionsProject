import React, { createContext, useEffect, useState } from 'react'

export type ContextProps = {
    children: React.ReactNode;
};

interface DarkThemeControl {
    darkThemeControl: boolean;
};

type SetDarkThemeControl = (darkThemeControl: DarkThemeControl) => void;

export type Type = {
    darkThemeControl: DarkThemeControl;
    setDarkThemeControl: SetDarkThemeControl;
};

export const ContextProvider = createContext<Type>({} as Type);

export const ContextProviders = ({ children }: ContextProps) => {

    const [darkThemeControl, setDarkThemeControl] = useState<DarkThemeControl>({ darkThemeControl: false });

    const darkThemeFunction = () => {
        let prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        let html = document.querySelector("html");

        if (localStorage.getItem("theme") === null) {
            if (prefersDarkMode) {
                localStorage.setItem("theme", "dark");
                html?.setAttribute("data-theme", "dark");
            }
            else {
                localStorage.setItem("theme", "light");
                html?.setAttribute("data-theme", "");
            }
        }
        else {
            if (!darkThemeControl.darkThemeControl) {
                localStorage.setItem("theme", "light");
                html?.setAttribute("data-theme", "");
            }
            else {
                localStorage.setItem("theme", "dark");
                html?.setAttribute("data-theme", "dark");
            }
        }
    };

    useEffect(() => {
        darkThemeFunction();
    });

    const data = {
        setDarkThemeControl, darkThemeControl
    };

    return (
        <ContextProvider.Provider value={data}>
            {children}
        </ContextProvider.Provider>
    )
}
