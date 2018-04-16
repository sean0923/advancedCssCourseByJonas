import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';

import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';

class ReactRouter extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------- Render ------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="content">
            <Sidebar />

            <Switch>
              <Route path={'/'} component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ReactRouter;
