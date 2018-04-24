import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import Home from './components/Home';

export default class Routes extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Switch>
        {/* --- HOME ROUTE '/' has to be at the most bottom --- */}
        <Route path={'/'} component={Home} />
        {/* --- HOME ROUTE '/' has to be at the most bottom --- */}
      </Switch>
    );
  }
}
