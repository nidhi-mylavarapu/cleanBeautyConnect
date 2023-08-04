import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../util/firebase";

export const AuthContext = createContext(null) //some default value - put null but change?
export const AuthContextProvider = ({ children }) => { //children, components
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children} {/* this component can reach currentUser */}
        </AuthContext.Provider>
    )
};