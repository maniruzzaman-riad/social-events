import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const Contact = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="">
            <h2 className="text-2xl font-bold text-center">Hello <span className="text-pink-500">{user ? user.displayName : 'User'}</span></h2>

            <div className="space-y-3 mb-28 px-7 mt-10">
                <h2 className="text-lg font-medium">This is <span className="text-purple-800 font-bold">Maniruzzaman Riad</span></h2>
                <h2 className="text-lg font-medium">Email : <span className="font-bold">maniruzzamanr94@gmail.com</span></h2>
                <h2 className="text-lg font-medium">Call : <span className="font-bold">01838667065</span></h2>
                <p className="text-lg font-bold"> Rangunia,Chattogram,Bangladesh</p>
            </div>
        </div>
    );
};

export default Contact;