import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [search, SetSearch] = useState(false);

  const SubmitSearch = e => {
    e.preventDefault();
    alert("Searched");
  };

  const openSearch = () => {
    SetSearch(true);
  };

  const SearchClass = search ? "search-input active" : "search-input";

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <a href="">Sign Out</a>
          </li>
        </ul>

        {/* <div className="search">
          <form onSubmit={SubmitSearch}>
            <input type="text" placeholder="search" className={SearchClass} />
            <img onClick={openSearch} src={require('../../assets/icons/search1.png')} alt="search" className="search-image" />
          </form>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;