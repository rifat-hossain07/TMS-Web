/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
// creating google auth provider from firebase
const provider = new GoogleAuthProvider();
// creating context to store user info
export const context = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  // function to create user using firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // function to login with email and password existing user using firebase
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // function to login with google existing user using firebase
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // function to logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    // storing user info
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOutUser,
    googleLogIn,
  };
  // providing context info to total app
  return <context.Provider value={authInfo}>{children}</context.Provider>;
};

export default Provider;
