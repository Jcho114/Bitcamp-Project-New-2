import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const ContextProvider = (props) => {
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [demoWindow, setDemoWindow] = useState(0);

    const login = (username, password) => {
        if (username === "Bitcamp" && password === "Bitcamp") {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    const changeWindow = (index) => {
        setDemoWindow(index);
    }

    return (
        <UserContext.Provider value={{loggedIn, demoWindow, login, logout, changeWindow}}>
            {props.children}
        </UserContext.Provider>
    )
}