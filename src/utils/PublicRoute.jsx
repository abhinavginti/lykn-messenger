import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const PublicRoute = ({ component: Component, restricted }) => {
    const { user } = useContext(AuthContext)
    return user && restricted ? <Navigate to='/' /> : <Component />
}

export default PublicRoute