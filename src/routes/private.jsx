import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export default function Private({ children }) {
     const { currentUser } = useAuth();

     return (currentUser ? (children) : <Navigate to={`/dashboard/login`} replace />)
}