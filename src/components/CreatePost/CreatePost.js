import React from "react";

import Button from "../UI/Button/Button";

import classes from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <div className={classes.createPost}>
      {/* <div className={classes.createPost__title}>Post your content/matches here!</div> */}
      <input className={classes.createPost__input} placeholder="What's on your mind?" />

      <div className={classes.createPost__buttons}>
        <Button>Share a video</Button>
        <Button>Share a screenshot</Button>
        <Button>Change your status</Button>
      </div>
    </div>
  );
};

export default CreatePost;
