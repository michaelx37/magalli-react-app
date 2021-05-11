import React, { Component } from 'react';

import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';

import './News.css'

class News extends Component {
    render () {
      return (
        <div className="news">
          <Toolbar />
          <main className="news__main">
            <h1>News Page</h1>
          </main>
          <Footer />
        </div>
      );
    }
  }

export default News;