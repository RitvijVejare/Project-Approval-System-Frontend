import React, { useState } from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

import VerifyLogin from "../../components/VerifyLogin";

const Homepage = () => {
  
  return (
    <div className="home-route">
      <h1>HOMEPAGE</h1>
      {/* <ul>
        <li>
          <NavLink to="/student">STUDENT</NavLink>
        </li>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/admin">ADMIN</NavLink>
        </li>
        <li>
          <NavLink to="/internal-guide">INTERNAL GUIDE</NavLink>
        </li>
        <li>
          <NavLink to="/project-incharge">PROJECT INCHARGE</NavLink>
        </li>
        <li>
          <NavLink to="/hod">HOD</NavLink>
        </li>
      </ul> */}
      <VerifyLogin />
    </div>
  );
};

export default Homepage;
