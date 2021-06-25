import React from "react";

import classes from "./ProfileInfo.module.css";

import YtLogo from "../../assets/icons/iconfinder_4-youtube_video_4202041.png";
import FbLogo from "../../assets/icons/iconfinder_Colored_Facebook3_svg_5365678.png";
import IgLogo from "../../assets/icons/iconfinder_social_media_applications_3-instagram_4102579.png";
import SteamLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_steam_2993761.png";
import TwitchLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_twitch_2993756.png";
import TwitterLogo from "../../assets/icons/iconfinder_square-twitter_317723.png";

const ProfileInfo = () => {
  return (
    <div className={classes.profile__info}>
      <div className={classes.profile__info__left}>
        <div className={classes.profile__image__container}>
          <img
            className={classes.profile__image}
            // src="https://sm.ign.com/ign_it/screenshot/default/angry-gamer_8tcc.jpg"
            alt=""
          />
        </div>
        <div className={classes.profile__desc__container}>
          <h2 className={classes.profile__fullName}>Full Name</h2>
          <h3 className={classes.profile__username}>Username</h3>
          <p className={classes.profile__bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper
            varius nisi.
          </p>
        </div>
      </div>
      <div className={classes.profile__info__right}>
        <div className={classes.profile__status}>
          <div className={classes.profile__status__team}>Team: [SCT] Schifo Come Tim</div>
          <div className={classes.profile__status__platform}>Platform: PC</div>
        </div>
        <div className={classes.profile__linksToSocials}>
          <img src={YtLogo} alt="" />
          <img src={SteamLogo} alt="" />
          <img src={TwitchLogo} alt="" />
          <img src={IgLogo} alt="" />
          <img src={FbLogo} alt="" />
          <img src={TwitterLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
