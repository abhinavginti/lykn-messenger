import { useEffect, useState, createContext } from 'react'
import ApiCall from '../utils/ApiCall'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    useEffect(() => {
        const AuthLogin = async () => {
            const data = await ApiCall('/api/auth', 'GET')
            if (!data.status) {
                setUser(false)
                console.log(data.error)
            }
        }

        if (localStorage.LMIsLoggedIn === 'true') {
            setUser(true)
            AuthLogin();
        }
        else {
            setUser(false)
        }
    }, [])
    return <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
}