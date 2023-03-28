import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export default function Private({ children }) {
     const { currentUser } = useAuth();
     const location = useLocation();

     return currentUser ? (children) : <Navigate to={`/dashboard`} replace={true} state={{ path: location.pathname }} />
}