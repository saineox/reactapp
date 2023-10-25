import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main">
      <h1>Welcome All, This is our home page</h1>
      <NavLink to="/login">Navigate to Login Page</NavLink>
      <br />
      <NavLink to="/register">Create a New Account</NavLink>
      <br />
      <NavLink to="/mail">Nested Navigation Page</NavLink>
    </div>
  );
};

export default HomePage;
