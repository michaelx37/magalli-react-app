import React, { Component } from 'react';

import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import SiteDescription from '../../components/SiteDescription/SiteDescription';
import MainPageCards from '../../components/MainPageCards/MainPageCards';
import Footer from '../../components/UI/Footer/Footer';

import './Home.css';

class Home extends Component {
  render () {
    return (
      <div className="home">
        <Toolbar />
        <main className="home__main">
          <Slideshow />
          <SiteDescription />
          <MainPageCards />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;