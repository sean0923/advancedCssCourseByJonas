import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../sharedComponents/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Route Constants ------------------------------------
// -----------------------------------------------------------------------------------------
import { ICON_NAME, TEXT } from '../../helper/routesDir/routeConstants';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Route Keys ------------------------------------
// -----------------------------------------------------------------------------------------
import { KEY_HOTEL, KEY_FLIGHT, KEY_CAR_RENTAL, KEY_TOUR } from '../../helper/routesDir/routeKeys';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Route Keys to Info ---------------------------------
// -----------------------------------------------------------------------------------------
import routeKeysToInfo from '../../helper/routesDir/routeKeysToInfo';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Navbar Items ---------------------------------------
// -----------------------------------------------------------------------------------------
const sidebarItems = [
  { text: routeKeysToInfo[KEY_HOTEL][TEXT], icon: routeKeysToInfo[KEY_HOTEL][ICON_NAME] },
  { text: routeKeysToInfo[KEY_FLIGHT][TEXT], icon: routeKeysToInfo[KEY_FLIGHT][ICON_NAME] },
  { text: routeKeysToInfo[KEY_CAR_RENTAL][TEXT], icon: routeKeysToInfo[KEY_CAR_RENTAL][ICON_NAME] },
  { text: routeKeysToInfo[KEY_TOUR][TEXT], icon: routeKeysToInfo[KEY_TOUR][ICON_NAME] },
];

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  height: var(--size-svg-at-sidebar) ;
  width: var(--size-svg-at-sidebar) ;
`;

export default class Sidebar extends Component {
  // ---------------------------------------------------------------------------------------
  // ---------------------------------- Render ---------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <div className="sidebar">
        <div>
          {sidebarItems.map(item => {
            return (
              <div key={item.text}>
                <StyledSvgIcon icon={item.icon} />
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
