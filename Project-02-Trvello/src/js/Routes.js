import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// -------------------------------- Route Keys ---------------------------------------------
// -----------------------------------------------------------------------------------------
import { KEY_HOTEL, KEY_FLIGHT, KEY_CAR_RENTAL, KEY_TOUR } from './helper/navDir/navKeys';

// -----------------------------------------------------------------------------------------
// -------------------------------- Constants ----------------------------------------------
// -----------------------------------------------------------------------------------------
import { LINK, COMPONENT_NAME } from './helper/navDir/navConstants';

// -----------------------------------------------------------------------------------------
// -------------------------------- Route Keys To Info -------------------------------------
// -----------------------------------------------------------------------------------------
import navKeysToInfo from './helper/navDir/navKeysToInfo';

export default class Routes extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Switch>
        <Route
          path={navKeysToInfo[KEY_FLIGHT][LINK]}
          component={navKeysToInfo[KEY_FLIGHT][COMPONENT_NAME]}
        />

        <Route
          path={navKeysToInfo[KEY_CAR_RENTAL][LINK]}
          component={navKeysToInfo[KEY_CAR_RENTAL][COMPONENT_NAME]}
        />

        <Route
          path={navKeysToInfo[KEY_TOUR][LINK]}
          component={navKeysToInfo[KEY_TOUR][COMPONENT_NAME]}
        />

        {/* --- HOME ROUTE '/' has to be at the most bottom --- */}
        <Route
          path={navKeysToInfo[KEY_HOTEL][LINK]}
          component={navKeysToInfo[KEY_HOTEL][COMPONENT_NAME]}
        />
        {/* --- HOME ROUTE '/' has to be at the most bottom --- */}
      </Switch>
    );
  }
}
