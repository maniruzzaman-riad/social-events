import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


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

PrivetRout.propTypes={
    children:PropTypes.node
}
export default PrivetRout;