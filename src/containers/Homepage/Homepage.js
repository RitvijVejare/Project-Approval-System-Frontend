import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home-route">
      <ul>
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
      </ul>
    </div>
  );
};

export default Homepage;
