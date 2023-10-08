import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


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
                <li><NavLink to="/register">User Info</NavLink></li>
                <li><NavLink to="/login">Privecy</NavLink></li>
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
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <h2>{user.email}</h2>
                            <button onClick={handleLogOut} className="btn">Log-Out</button>
                        </>
                            :
                            <Link to="/login"><button className="btn">Log-in</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;