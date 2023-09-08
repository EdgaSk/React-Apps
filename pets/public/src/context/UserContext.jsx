import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const isLoggedIn = !!user;

    return (
        <UserContext.Provider value={{user, setUser, isLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};