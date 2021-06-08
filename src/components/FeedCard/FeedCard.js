import React from "react";

import classes from "./FeedCard.module.css";

const FeedCard = (props) => {
  return (
    <div className={classes.feed__card}>
      <div className={classes.feed__card__author}>
        <div className={classes.feed__card__author__avatar}></div>
        <div className={classes.feed__card__author__name}>Tizio Caio</div>
        <div className={classes.feed__card__author__options}></div>
      </div>
      <div className={classes.feed__card__content}>
        <iframe
          //width="1280"
          //height="720"
          src="https://www.youtube.com/embed/8f-2yXiYmRI"
          //src="https://www.youtube.com/watch?v=8f-2yXiYmRI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={classes.feed__card__title}>A Youtube video</div>
      <div className={classes.feed__card__buttons}>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default FeedCard;
