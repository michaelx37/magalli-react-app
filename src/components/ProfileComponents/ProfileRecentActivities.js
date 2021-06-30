import React from "react";

import classes from "./ProfileRecentActivities.module.css";

const ProfileRecentActivities = () => {
  return (
    <div className={classes.activities}>
      <div className={classes.activities__title}>
        <h4>Recent Activities</h4>
      </div>
      <div>Show more</div>
    </div>
  );
};

export default ProfileRecentActivities;
