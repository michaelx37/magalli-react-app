import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

/*import Toolbar from '../components/UI/Toolbar/Toolbar';
import Slideshow from '../components/Slideshow/Slideshow';
import SiteDescription from '../components/SiteDescription/SiteDescription';
import CardGamer from '../components/CardGamer/CardGamer';
import CardCompany from '../components/CardCompany/CardCompany';
import Footer from '../components/UI/Footer/Footer';*/

import Home from "../pages/Home/Home";
import Search from "../pages/Search/SearchPage";
import News from "../pages/News/News";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import LogInPage from "../pages/LogInPage/LogInPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import SingleProfilePage from "../pages/SingleProfilePage/SingleProfilePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/news" exact component={News} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/auth" exact component={LogInPage} />
          <Route path="/registration-page" component={RegistrationPage} />
          <Route path="/user-profile" component={SingleProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
