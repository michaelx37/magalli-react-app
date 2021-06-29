import React from "react";

import classes from "./ProfileInfo.module.css";

import YtLogo from "../../assets/icons/iconfinder_4-youtube_video_4202041.png";
import FbLogo from "../../assets/icons/iconfinder_Colored_Facebook3_svg_5365678.png";
import IgLogo from "../../assets/icons/iconfinder_social_media_applications_3-instagram_4102579.png";
import SteamLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_steam_2993761.png";
import TwitchLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_twitch_2993756.png";
import TwitterLogo from "../../assets/icons/iconfinder_square-twitter_317723.png";

const ProfileInfo = () => {
  const user = {
    firstName: "Michael",
    lastName: "Reale Dionigi",
    username: "MG x M1CH43LX37",
    biography:
      "Ma guardaa...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper varius nisi",
    profileImg: "https://sm.ign.com/ign_it/screenshot/default/angry-gamer_8tcc.jpg",
    currentTeam: "[LDM] Linea Di Merda",
    platform: "PC / Xbox 360",
    socials: {
      youtube: "https://www.youtube.com/channel/UCNzXBbz7lz7OL4LxlP55H8g/videos",
      steam: "https://steamcommunity.com/profiles/76561198079075940/",
      twitch: "https://www.twitch.tv/michaelx37",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
  };

  return (
    <div className={classes.profile__info}>
      <div className={classes.profile__info__left}>
        <div className={classes.profile__image__container}>
          <img className={classes.profile__image} src={user.profileImg} alt="" />
        </div>
        <div className={classes.profile__desc__container}>
          <h2 className={classes.profile__fullName}>{user.firstName + " " + user.lastName}</h2>
          <h3 className={classes.profile__username}>{user.username}</h3>
          <p className={classes.profile__bio}>{user.biography}</p>
        </div>
      </div>
      <div className={classes.profile__info__right}>
        <div className={classes.profile__status}>
          <div className={classes.profile__status__team}>
            <span>Team: </span>
            {user.currentTeam}
          </div>
          <div className={classes.profile__status__platform}>
            <span>Platform: </span>
            {user.platform}
          </div>
        </div>
        <div className={classes.profile__linksToSocials}>
          {user.socials.youtube && (
            <a href={user.socials.youtube}>
              <img src={YtLogo} alt="" />
            </a>
          )}
          {user.socials.steam && (
            <a href={user.socials.steam}>
              <img src={SteamLogo} alt="" />
            </a>
          )}
          {user.socials.twitch && (
            <a href={user.socials.twitch}>
              <img src={TwitchLogo} alt="" />
            </a>
          )}
          {user.socials.instagram && (
            <a href={user.socials.instagram}>
              <img src={IgLogo} alt="" />
            </a>
          )}
          {user.socials.facebook && (
            <a href={user.socials.facebook}>
              <img src={FbLogo} alt="" />
            </a>
          )}
          {user.socials.twitter && (
            <a href={user.socials.twitter}>
              <img src={TwitterLogo} alt="" />
            </a>
          )}
        </div>
        <div className={classes.profile__actions}>
          <div>Add to Friends</div>
          <div>Follow</div>
          <div>Message</div>
          <div>Quick Menu</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
