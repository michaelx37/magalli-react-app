import React, { Fragment } from "react";
//import { Link } from "react-router-dom";

import NavBar from "../../components/UI/NavBar/NavBar";
import FeedCard from "../../components/FeedCard/FeedCard";

import classes from "./Feed.module.css";

const Feed = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.feed}>
        <div className={classes.feed__profile}></div>
        <div className={classes.feed__cards}>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className={classes.feed__extra}>
          <div></div>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
