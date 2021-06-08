import React /*, { useState, useEffect }*/ from "react";
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

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
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
        <button onClick={logoutHandler}>Log Out</button>
        {/* <NavLink to="/" className={classes.link} exact>
          Log Out
        </NavLink> */}
      </li>
    );
  }

  return displayLoggedUser;
};

export default ProfileAvatar;
