import React, { useState /*, useEffect*/ } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <div className={classes.avatar__container}>
          <img
            className={classes.avatar}
            src="https://sg-res.9appsinstall.com/sg/res/jpg/26/cc/f8d94127b50f6c29eb7d2c60983e-74e7.jpg"
            alt=""
            onClick={toggleDropdown}
          />
          {showUserDropdown ? (
            <div className={classes.dropdown}>
              <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "1.4rem" }}>MG x M1CH43LX37</p>
              <Link className={classes.dropdown__link} to="/user-profile">
                Your Profile
              </Link>
              <hr className={classes.separator} />
              <Link className={classes.dropdown__link} to="/team-profile">
                [SCT] Schifo Come Tim
              </Link>
              <hr className={classes.separator} />
              <Link className={classes.dropdown__link} to="/user-profile">
                Settings
              </Link>
              <hr className={classes.separator} />
              <p className={classes.dropdown__link} onClick={logoutHandler}>
                Log Out
              </p>
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
