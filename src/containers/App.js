import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/*import Toolbar from '../components/UI/Toolbar/Toolbar';
import Slideshow from '../components/Slideshow/Slideshow';
import SiteDescription from '../components/SiteDescription/SiteDescription';
import CardGamer from '../components/CardGamer/CardGamer';
import CardCompany from '../components/CardCompany/CardCompany';
import Footer from '../components/UI/Footer/Footer';*/

import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import Blog from '../pages/Blog/Blog';
import AboutUs from '../pages/AboutUs/AboutUs';
import PrivateArea from '../pages/PrivateArea/PrivateArea';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" exact component={News}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/private" exact component={PrivateArea}/>
        </Switch>
      </div>
    );
  }
}

export default App;