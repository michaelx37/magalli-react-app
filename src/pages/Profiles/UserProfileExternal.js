  import React, { Fragment } from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
//import ProfileMilestones from "../../components/ProfileComponents/ProfileMilestones";
import ProfileInfo from "../../components/ProfileComponents/ProfileInfo";
import ProfileRecentActivities from "../../components/ProfileComponents/ProfileRecentActivities";
import ProfileCareer from "../../components/ProfileComponents/ProfileCareer";
//import Footer from "../../components/UI/Footer/Footer";

import classes from "./ProfilesExternal.module.css";

const UserProfileExternal = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.profile__main}>
        {/* <ProfileMilestones /> */}
        <ProfileInfo />
        <ProfileRecentActivities />
        <ProfileCareer />
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default UserProfileExternal;
