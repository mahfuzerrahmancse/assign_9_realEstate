/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
      setLoading(true);
        return signOut(auth);
    }

    // for containing user data
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged( auth, (currentUser)=>{
            console.log("currentUser", currentUser);
            setUser(currentUser);
            setLoading(false);
        } );
        return ()=>{ unSubscribe(); };
    } ,[]);

    const authInfo = { user,loading, createUser, signInUser, signOutUser };

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;