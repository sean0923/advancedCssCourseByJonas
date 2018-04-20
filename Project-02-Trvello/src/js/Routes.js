import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// -------------------------------- Route Keys ---------------------------------------------
// -----------------------------------------------------------------------------------------
import { KEY_HOTEL, KEY_FLIGHT, KEY_CAR_RENTAL, KEY_TOUR } from './helper/routesDir/routeKeys';

// -----------------------------------------------------------------------------------------
// -------------------------------- Constants ----------------------------------------------
// -----------------------------------------------------------------------------------------
import { LINK, COMPONENT_NAME } from './helper/routesDir/routeConstants';

// -----------------------------------------------------------------------------------------
// -------------------------------- Route Keys To Info -------------------------------------
// -----------------------------------------------------------------------------------------
import routeKeysToInfo from './helper/routesDir/routeKeysToInfo';

export default class Routes extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Switch>
        <Route
          path={routeKeysToInfo[KEY_FLIGHT][LINK]}
          component={routeKeysToInfo[KEY_FLIGHT][COMPONENT_NAME]}
        />

        <Route
          path={routeKeysToInfo[KEY_CAR_RENTAL][LINK]}
          component={routeKeysToInfo[KEY_CAR_RENTAL][COMPONENT_NAME]}
        />

        <Route
          path={routeKeysToInfo[KEY_TOUR][LINK]}
          component={routeKeysToInfo[KEY_TOUR][COMPONENT_NAME]}
        />

        {/* --- HOME ROUTE '/' has to be at the most bottom --- */}
        <Route
          path={routeKeysToInfo[KEY_HOTEL][LINK]}
          component={routeKeysToInfo[KEY_HOTEL][COMPONENT_NAME]}
        />
        {/* --- HOME ROUTE '/' has to be at the most bottom --- */}
      </Switch>
    );
  }
}
