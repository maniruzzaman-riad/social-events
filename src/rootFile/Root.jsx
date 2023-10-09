import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="divider"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;