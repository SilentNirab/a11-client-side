import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../assets/Firebase/Firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signUp = (eamil, password) => {
        return createUserWithEmailAndPassword(auth, eamil, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            return unsubscribe;
        }
    }, [auth])
    const values = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        logOut,
    }
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;