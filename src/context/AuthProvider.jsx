import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const userRegistration =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user,userRegistration,loginUser,logOutUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;