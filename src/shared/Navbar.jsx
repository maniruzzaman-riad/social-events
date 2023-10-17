import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FiLogOut } from 'react-icons/fi';
import logo from '../assets/logo.png'


const Navbar = () => {

    const { logOutUser, user } = useContext(AuthContext)
    // console.log(user);

    const handleLogOut = () => {
        logOutUser()
    }

    const allLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contuct Us</NavLink></li>
        <li><NavLink to="/register">Registration</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        {
            user && <>
                <li><NavLink to="/userInfo">User Info</NavLink></li>
                <li><NavLink to="/privecy">Privecy</NavLink></li>
            </>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {allLink}
                        </ul>
                    </div>
                    <img className="w-20 md:w-32" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            {
                                user?.photoURL &&  <img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="" />
                            }
                            <h2 className="font-bold mx-3">{user?.displayName}</h2>
                            <button onClick={handleLogOut} className="text-2xl border-2 p-2 rounded-full border-purple-700"><FiLogOut></FiLogOut></button>
                        </>
                            :
                            <Link to="/login"><button className="py-1 px-3 bg-green-600 text-white font-semibold rounded-lg">Log-In</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;