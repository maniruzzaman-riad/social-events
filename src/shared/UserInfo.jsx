import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const UserInfo = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Hello <span className="text-pink-500">{user.displayName}</span></h2>
            <h2 className="text-center font-semibold">Here your full Details</h2>
            <div className="flex justify-between items-center p-5 mb-28">
                <div className="space-y-5">
                    <h2 className="text-2xl font-medium">Name : <span className="font-bold">{user.displayName}</span></h2>
                    <h2 className="text-2xl font-medium">Email : <span className="font-bold">{user.email}</span></h2>
                </div>
                <img className="w-36 h-36" src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default UserInfo;