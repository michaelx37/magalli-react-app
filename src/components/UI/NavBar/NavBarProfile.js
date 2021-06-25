import React, { useState /*, useEffect*/ } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../../store/store";

import classes from "./NavBarProfile.module.css";

const ProfileAvatar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkStoredLogInState = localStorage.getItem("isLoggedIn");

  //   if (checkStoredLogInState === "true") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  /* State managed by redux */
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  /* State managed by hooks */
  const [showUserDropdown, setshowUserDropdown] = useState(false);
  const toggleDropdown = () => {
    setshowUserDropdown(!showUserDropdown);
  };

  let displayLoggedUser = (
    <li className={classes.navbar__link}>
      <NavLink to="/auth" className={classes.link} exact>
        Log In
      </NavLink>
    </li>
  );

  if (isLogged) {
    displayLoggedUser = (
      <li className={classes.navbar__link}>
        <div className={classes.avatar__container} onClick={toggleDropdown}>
          <img
            className={classes.avatar}
            src="https://sg-res.9appsinstall.com/sg/res/jpg/26/cc/f8d94127b50f6c29eb7d2c60983e-74e7.jpg"
            alt=""
          />
          {showUserDropdown ? (
            <div className={classes.dropdown}>
              <p style={{ fontWeight: "bold" }}>MG x M1CH43LX37</p>
              <p>Your Profile</p>
              <p>[SCT] Schifo Come Tim</p>
              <p>Settings</p>
              <button onClick={logoutHandler} className={classes.logOutButton}>
                Log Out
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
    );
  }

  return displayLoggedUser;
};

export default ProfileAvatar;
