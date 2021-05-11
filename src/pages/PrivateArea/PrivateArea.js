import React from 'react';

import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';

import './PrivateArea.css';

const PrivateArea = () => {
    return (
        <div className="authentication">
          <Toolbar />
          <main className="authentication__main">
          </main>
          <Footer />
        </div>
    );
}

export default PrivateArea;