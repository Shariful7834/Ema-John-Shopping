import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>About Page</h1>
      <h2>Welcome to {user?.email}</h2>
    </div>
  );
};

export default About;
