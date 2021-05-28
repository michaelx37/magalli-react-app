import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import ProfileAvatar from "./NavBarProfile";
import "./NavBar.css";

const Toolbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStoredLogInState = localStorage.getItem("isLoggedIn");

    if (checkStoredLogInState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="toolbar">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <nav className="navbar">
        <ul className="navbar__links">
          <li className="navbar__link">
            <NavLink to="/" className="link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to="/search" className="link" activeClassName="active" exact>
              Search
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to="/news" className="link" activeClassName="active" exact>
              News
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to="/blog" className="link" activeClassName="active" exact>
              Blog
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to="/about-us" className="link" activeClassName="active" exact>
              About us
            </NavLink>
          </li>
          {/* <li className="navbar__link">
            <NavLink to="/auth" className="link" exact>
              Login
            </NavLink>
          </li> */}
          <ProfileAvatar />
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
