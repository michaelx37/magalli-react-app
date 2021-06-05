import React /*, { useState, useEffect }*/ from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../Logo/Logo";
import ProfileAvatar from "./NavBarProfile";
import "./NavBar.css";

const NavBar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkStoredLogInState = localStorage.getItem("isLoggedIn");

  //   if (checkStoredLogInState === "true") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const isLogged = useSelector((state) => state.auth.isAuthenticated);

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
          {isLogged && (
            <li className="navbar__link">
              <NavLink to="/user-profile" className="link" activeClassName="active" exact>
                User Profile
              </NavLink>
            </li>
          )}
          {isLogged && (
            <li className="navbar__link">
              <NavLink to="/team-profile" className="link" activeClassName="active" exact>
                Team Profile
              </NavLink>
            </li>
          )}
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

export default NavBar;
