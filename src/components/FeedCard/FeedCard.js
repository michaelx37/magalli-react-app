import React from "react";
import classes from "./FeedCard.module.css";
import Button from '@material-ui/core/Button';

const FeedCard = () => {
  return (
    <div className={classes.feed_card}>
      <div className={classes.feed_card_author}>
        <div className={classes.feed_card_author_avatar}></div>
        <div className={classes.feed_card_author_name}>Tizio Caio</div>
        <div className={classes.feed_card_author_options}></div>
      </div>
      <div className={classes.feed_card_content}>
        <iframe
          src="https://www.youtube.com/embed/8f-2yXiYmRI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={classes.feed_card_title}>A Youtube video</div>
      <div className={classes.feed_card_buttons}>
        <Button color="primary" variant='contained'>Like</Button>
        <Button color="primary" variant='contained'>Comment</Button>
        <Button color="primary" variant='contained'>Share</Button>
      </div>
    </div>
  );
};

export default FeedCard;
