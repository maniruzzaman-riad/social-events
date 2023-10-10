import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location =useLocation()

    if (loding) {
        return <span className="loading loading-spinner loading-lg ms-[550px] mt-36"></span>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRout;