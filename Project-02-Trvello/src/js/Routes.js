import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ------------------------------- Import Components ---------------------------------------
// -----------------------------------------------------------------------------------------
import HotelView from './components/pages/HotelView';
import TestPage00 from './components/pages/TestPage00';

// -----------------------------------------------------------------------------------------
// -------------------------------- Route Names --------------------------------------------
// -----------------------------------------------------------------------------------------
const NAME_HOTEL_VIEW = 'HOTEL_VIEW';
const NAME_TEST_PAGE_00 = 'TEST_PAGE_00';

// -----------------------------------------------------------------------------------------
// -------------------------------- Links --------------------------------------------------
// -----------------------------------------------------------------------------------------
const LINK_HOTEL_VIEW = '/';
const LINK_TEST_PAGE_00 = '/test-page-00';

// -----------------------------------------------------------------------------------------
// -------------------------------- Constants ----------------------------------------------
// -----------------------------------------------------------------------------------------
const LINK = 'LINK';
const COMPONENT_NAME = 'COMPONENT_NAME';

// -----------------------------------------------------------------------------------------
// ------------------------------- Name To Link and Components -----------------------------
// -----------------------------------------------------------------------------------------
const nameToLinkInfo = {
  [NAME_HOTEL_VIEW]: { [LINK]: LINK_HOTEL_VIEW, [COMPONENT_NAME]: HotelView },
  [NAME_TEST_PAGE_00]: { [LINK]: LINK_TEST_PAGE_00, [COMPONENT_NAME]: TestPage00 },
};

export default class Routes extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Switch>
        <Route
          path={nameToLinkInfo[NAME_TEST_PAGE_00][LINK]}
          component={nameToLinkInfo[NAME_TEST_PAGE_00][COMPONENT_NAME]}
        />
        <Route
          path={nameToLinkInfo[NAME_HOTEL_VIEW][LINK]}
          component={nameToLinkInfo[NAME_HOTEL_VIEW][COMPONENT_NAME]}
        />
      </Switch>
    );
  }
}
