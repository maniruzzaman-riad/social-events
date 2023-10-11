import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from '../Firebase/firebase.config'


const provider= new GoogleAuthProvider()
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const userRegistration = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    const signInWithGoogle =()=>{
        setLoding(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, userRegistration, loginUser, logOutUser, loding ,signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;