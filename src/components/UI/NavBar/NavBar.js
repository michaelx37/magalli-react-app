import React /*, { useState, useEffect }*/ from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../Logo/Logo";
import ProfileAvatar from "./NavBarProfile";
import classes from "./NavBar.module.css";

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
    <header className={classes.toolbar}>
      <Link to="/" className={classes.header__logo}>
        <Logo />
      </Link>
      <nav className={classes.navbar}>
        <ul className={classes.navbar__links}>
          <li className={classes.navbar__link}>
            <NavLink to="/" className={classes.link} activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className={classes.navbar__link}>
            <NavLink to="/feed" className={classes.link} activeClassName="active" exact>
              Feed
            </NavLink>
          </li>
          <li className={classes.navbar__link}>
            <NavLink to="/search" className={classes.link} activeClassName="active" exact>
              Search
            </NavLink>
          </li>
          {isLogged && (
            <li className={classes.navbar__link}>
              <NavLink to="/user-profile" className={classes.link} activeClassName="active" exact>
                User Profile
              </NavLink>
            </li>
          )}
          {isLogged && (
            <li className={classes.navbar__link}>
              <NavLink to="/team-profile" className={classes.link} activeClassName="active" exact>
                Team Profile
              </NavLink>
            </li>
          )}
          <ProfileAvatar />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
