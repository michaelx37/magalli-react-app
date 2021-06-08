import React, { Fragment } from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";

import classes from "./ProfilesExternal.module.css";

import YtLogo from "../../assets/icons/iconfinder_4-youtube_video_4202041.png";
import FbLogo from "../../assets/icons/iconfinder_Colored_Facebook3_svg_5365678.png";
import IgLogo from "../../assets/icons/iconfinder_social_media_applications_3-instagram_4102579.png";
import SteamLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_steam_2993761.png";
import TwitchLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_twitch_2993756.png";
import TwitterLogo from "../../assets/icons/iconfinder_square-twitter_317723.png";

const TeamProfileExternal = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.team__main}>
        <div className={classes.team__info}>
          <div className={classes.team__info__section}>
            <div className={classes.team__image__container}>
              <img className={classes.team__image} src="" alt="" />
            </div>
            <div className={classes.team__desc__container}>
              <h2 className={classes.team__name}>[SCT] Schifo Come Tim</h2>
              <p className={classes.team__bio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut,
                semper varius nisi.
              </p>
            </div>
          </div>
          <div className={classes.team__info__section}>
            <div className={classes.team__actualMembers}></div>
            <div className={classes.team__linksToSocials}>
              <img src={YtLogo} alt="" />
              <img src={SteamLogo} alt="" />
              <img src={TwitchLogo} alt="" />
              <img src={IgLogo} alt="" />
              <img src={FbLogo} alt="" />
              <img src={TwitterLogo} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.team__activities}></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TeamProfileExternal;
