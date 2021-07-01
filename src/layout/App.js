import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/UI/NavBar[NEW]/NavBar";
import Home from "../pages/Home/Home";
import Feed from "../pages/Feed/Feed";
import Network from "../pages/Network/Network";
import Search from "../pages/Search/SearchPage";
import AboutUs from "../pages/AboutUs/AboutUs";
// import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import UserProfileExternal from "../pages/Profiles/UserProfileExternal";
import TeamProfileExternal from "../pages/Profiles/TeamProfileExternal";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/network" exact component={Network} />
        <Route path="/search" component={Search} />
        <Route path="/about-us" component={AboutUs} />
        {/* <Route path="/auth" exact component={LoginPage} /> */}
        <Route path="/registration-page" component={RegistrationPage} />
        <Route path="/user-profile" component={UserProfileExternal} />
        <Route path="/team-profile" component={TeamProfileExternal} />
      </Switch>
    </div>
  );
};

export default App;
