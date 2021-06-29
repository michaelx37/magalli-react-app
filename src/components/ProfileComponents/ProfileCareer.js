import React from "react";

import classes from "./ProfileCareer.module.css";

const ProfileCareer = () => {
  return (
    <div className={classes.career}>
      <div className={classes.career__selectors}>
        <h4>Achievements</h4>
        <h4>Team(s)</h4>
        <h4>Tournaments</h4>
      </div>
      <div className={classes.career__content}>Games list, API, tournaments</div>
    </div>
  );
};

export default ProfileCareer;
