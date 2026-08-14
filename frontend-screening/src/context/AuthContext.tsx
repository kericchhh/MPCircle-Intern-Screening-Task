import { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextType = {
    isAuth: boolean,
    login: () => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children} : { children : ReactNode}){
    const [isAuth, setIsAuth] = useState(false)
    function login() {
        setIsAuth(true)
    }
    function logout() {
        setIsAuth(false)
    }
    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth not in AuthProvider")
    }
    return context
}
