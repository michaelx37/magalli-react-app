import React from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";
import "./ProfilesExternal.css";
import YtLogo from "../../assets/icons/iconfinder_4-youtube_video_4202041.png";
import FbLogo from "../../assets/icons/iconfinder_Colored_Facebook3_svg_5365678.png";
import IgLogo from "../../assets/icons/iconfinder_social_media_applications_3-instagram_4102579.png";
import SteamLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_steam_2993761.png";
import TwitchLogo from "../../assets/icons/iconfinder_social_media_social_media_logo_twitch_2993756.png";
import TwitterLogo from "../../assets/icons/iconfinder_square-twitter_317723.png";

const UserProfileExternal = () => {
  return (
    <div>
      <NavBar />
      <div className="profile__main">
        <div className="profile__info">
          <div className="profile__info__section">
            <div className="profile__image__container">
              <img
                className="profile__image"
                // src="https://sm.ign.com/ign_it/screenshot/default/angry-gamer_8tcc.jpg"
                alt=""
              />
            </div>
            <div className="profile__desc__container">
              <h2 className="profile__full-name">Full Name</h2>
              <h3 className="profile__username">Username</h3>
              <p className="profile__bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut,
                semper varius nisi.
              </p>
            </div>
          </div>
          <div className="profile__info__section">
            <div className="profile__actual-team"></div>
            <div className="profile__links-to-socials">
              <img src={YtLogo} alt="" />
              <img src={SteamLogo} alt="" />
              <img src={TwitchLogo} alt="" />
              <img src={IgLogo} alt="" />
              <img src={FbLogo} alt="" />
              <img src={TwitterLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="profile__achievements">User Achievements</div>
        <div className="profile__activities">Activities</div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfileExternal;
