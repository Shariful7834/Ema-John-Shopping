import React, { createContext } from "react";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const user = { email: "shariful" };
  const authInfo = { user };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
