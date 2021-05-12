import React, { Component } from 'react';

import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';

import './Blog.css'

class Blog extends Component {
  render () {
    return (
      <div className="blog">
        <Toolbar />
        <main className="blog__main">
          <h1>Blog Page</h1> 
        </main>
        <Footer />
      </div>
    );
  }
}

export default Blog;