import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../assets/Firebase/Firebase.config";
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const signUp = (eamil, password) => {
        return createUserWithEmailAndPassword(auth, eamil, password)
    }
    
    const values = {
        user,
        loading,
        signUp
    }
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;