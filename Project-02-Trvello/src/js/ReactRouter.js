import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

class ReactRouter extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------- Render ------------------------------------------
  // ---------------------------------------------------------------------------------------
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/'} component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default ReactRouter;
