import { useEffect, useRef, createContext } from "react";
import io from 'socket.io-client'
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const socket = useRef();
    useEffect(() => {
        socket.current = io("http://localhost:5000")
    }, [])
    return <SocketContext.Provider value={{ socket }}>
        {children}
    </SocketContext.Provider>
}