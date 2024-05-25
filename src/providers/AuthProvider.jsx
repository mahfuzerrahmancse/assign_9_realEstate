/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

  // email & password based
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    // google based
    const signInGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    // github based
    const signInGithub = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    }

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

    const authInfo = { user,loading, createUser, signInUser,signInGoogle,signInGithub, signOutUser };

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;