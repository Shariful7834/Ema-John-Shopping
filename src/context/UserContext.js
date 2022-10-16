import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User inside statechange", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { user, createUser, signIn, logOut };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
