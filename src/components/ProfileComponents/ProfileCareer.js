import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";

import classes from "./ProfileCareer.module.css";

const ProfileCareer = () => {
  return (
    <div className={classes.career}>
      <div className={classes.career__selectors}>
        <NavLink to="/user-profile/" className={classes.career__selectors__link} activeClassName={classes.active} exact>
          Achievements
        </NavLink>
        <NavLink
          to="/user-profile/teams"
          className={classes.career__selectors__link}
          activeClassName={classes.active}
          exact
        >
          Team(s)
        </NavLink>
        <NavLink
          to="/user-profile/tournaments"
          className={classes.career__selectors__link}
          activeClassName={classes.active}
          exact
        >
          Tournaments
        </NavLink>
      </div>
      <div className={classes.career__content}>
        <Switch>
          <Route path="/user-profile/" exact>
            Games achievements
          </Route>
          <Route path="/user-profile/teams" exact>
            Teams
          </Route>
          <Route path="/user-profile/tournaments" exact>
            Tournaments
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProfileCareer;
