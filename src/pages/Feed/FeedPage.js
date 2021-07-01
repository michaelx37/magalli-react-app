import React, { Fragment } from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import FeedCard from "../../components/FeedCard/FeedCard";
import classes from "./Feed.module.css";

const FeedPage = () => {
  return (
    <Fragment>
      <div className={classes.feed}>
        <div className={classes.feed__profile__container}></div>
        <div className={classes.feed__cards__container}>
          <CreatePost />
          <FeedCard />
        </div>
        <div className={classes.feed__extra__container}>
          <div></div>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeedPage;
