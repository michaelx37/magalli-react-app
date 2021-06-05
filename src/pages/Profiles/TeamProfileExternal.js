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

const TeamProfileExternal = () => {
  return (
    <div>
      <NavBar />
      <div className="team__main">
        <div className="team__info">
          <div className="team__info__section">
            <div className="team__image__container">
              <img className="team__image" src="" alt="" />
            </div>
            <div className="team__desc__container">
              <h2 className="team__name">[SCT] Schifo Come Tim</h2>
              <p className="team__bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut,
                semper varius nisi.
              </p>
            </div>
          </div>
          <div className="team__info__section">
            <div className="team__actual-members"></div>
            <div className="team__links-to-socials">
              <img src={YtLogo} alt="" />
              <img src={SteamLogo} alt="" />
              <img src={TwitchLogo} alt="" />
              <img src={IgLogo} alt="" />
              <img src={FbLogo} alt="" />
              <img src={TwitterLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="team__activities"></div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamProfileExternal;
