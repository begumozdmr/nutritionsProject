import React, { createContext, useEffect, useState } from 'react'

export type ContextProps = {
    children: React.ReactNode;
};

interface DarkThemeControl {
    darkThemeControl: boolean;
};

type SetDarkThemeControl = (darkThemeControl: DarkThemeControl) => void;

interface ActiveIndex {
    activeIndex: number;
};

type SetActiveIndex = (activeIndex: ActiveIndex) => void;

interface PageLoad {
    pageLoad: boolean;
};

type SetPageLoad = (pageLoad: PageLoad) => void;

interface CreateUser {
    id: number;
    nameSurname: string;
    email: string;
    password: string;
    token: string;
    usersDate: string;
};

type SetCreateUser = (createUser: CreateUser) => void;

interface LoginUsers {
    email: string;
    password: string;
};
type SetLoginUsers = (loginUsers: LoginUsers) => void;

interface UsersInformation {
    id: string;
    nameSurname: string;
};
type SetUsersInformation = (usersInformation: UsersInformation) => void;

interface UsersControl {
    usersControl: boolean;
};
type SetUsersControl = (usersControl: UsersControl) => void;

export type Type = {
    darkThemeControl: DarkThemeControl;
    setDarkThemeControl: SetDarkThemeControl;
    activeIndex: ActiveIndex;
    setActiveIndex: SetActiveIndex;
    handleLinkClick: (index: number) => void;
    pageLoad: PageLoad;
    setPageLoad: SetPageLoad;
    createUser: CreateUser;
    setCreateUser: SetCreateUser;
    loginUsers: LoginUsers;
    setLoginUsers: SetLoginUsers;
    usersInformation: UsersInformation;
    setUsersInformation: SetUsersInformation;
    usersControl: UsersControl;
    setUsersControl: SetUsersControl;
};

export const ContextProvider = createContext<Type>({} as Type);

export const ContextProviders = ({ children }: ContextProps) => {

    const [darkThemeControl, setDarkThemeControl] = useState<DarkThemeControl>({ darkThemeControl: false });
    const [activeIndex, setActiveIndex] = useState<ActiveIndex>({ activeIndex: 1 });
    const [pageLoad, setPageLoad] = useState<PageLoad>({ pageLoad: true });
    const [createUser, setCreateUser] = useState<CreateUser>({} as CreateUser);
    const [loginUsers, setLoginUsers] = useState<LoginUsers>({} as LoginUsers);
    const [usersInformation, setUsersInformation] = useState<UsersInformation>({} as UsersInformation);
    const [usersControl, setUsersControl] = useState<UsersControl>({ usersControl: false });

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

    const handleLinkClick = (index: number) => {
        setActiveIndex({ activeIndex: index === activeIndex.activeIndex ? 0 : index });
    };

    const pageLoadFunction = () => {
        const timeOut = setTimeout(() => {
            setPageLoad({ pageLoad: false })
        }, 3000);

        return () => { clearTimeout(timeOut) };
    };

    useEffect(() => {
        darkThemeFunction();
        pageLoadFunction();
    });

    const data = {
        setDarkThemeControl, darkThemeControl,
        activeIndex, setActiveIndex, handleLinkClick,
        pageLoad, setPageLoad,
        createUser, setCreateUser,
        loginUsers, setLoginUsers,
        usersInformation, setUsersInformation,
        usersControl, setUsersControl
    };

    return (
        <ContextProvider.Provider value={data}>
            {children}
        </ContextProvider.Provider>
    )
}
