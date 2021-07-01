import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router"
import HomePage from '../pages/Home/HomePage';
import FeedPage from '../pages/Feed/FeedPage'
import NetworkPage from '../pages/Network/NetworkPage';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/network" component={NetworkPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
