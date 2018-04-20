import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../sharedComponents/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Route Constants ------------------------------------
// -----------------------------------------------------------------------------------------
import { ICON_NAME, TEXT, LINK } from '../../helper/navDir/navConstants';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Route Keys ------------------------------------
// -----------------------------------------------------------------------------------------
import { KEY_HOTEL, KEY_FLIGHT, KEY_CAR_RENTAL, KEY_TOUR } from '../../helper/navDir/navKeys';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Route Keys to Info ---------------------------------
// -----------------------------------------------------------------------------------------
import navKeysToInfo from '../../helper/navDir/navKeysToInfo';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Navbar Items ---------------------------------------
// -----------------------------------------------------------------------------------------
const navbarItems = [
  {
    text: navKeysToInfo[KEY_HOTEL][TEXT],
    icon: navKeysToInfo[KEY_HOTEL][ICON_NAME],
    link: navKeysToInfo[KEY_HOTEL][LINK],
  },
  {
    text: navKeysToInfo[KEY_FLIGHT][TEXT],
    icon: navKeysToInfo[KEY_FLIGHT][ICON_NAME],
    link: navKeysToInfo[KEY_FLIGHT][LINK],
  },
  {
    text: navKeysToInfo[KEY_CAR_RENTAL][TEXT],
    icon: navKeysToInfo[KEY_CAR_RENTAL][ICON_NAME],
    link: navKeysToInfo[KEY_CAR_RENTAL][LINK],
  },
  {
    text: navKeysToInfo[KEY_TOUR][TEXT],
    icon: navKeysToInfo[KEY_TOUR][ICON_NAME],
    link: navKeysToInfo[KEY_TOUR][LINK],
  },
];

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  height: var(--size-svg-at-navbar) ;
  width: var(--size-svg-at-navbar) ;
`;

export default class Navbar extends Component {
  // ---------------------------------------------------------------------------------------
  // ---------------------------------- Render ---------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <div className="navbar">
        <div>
          {navbarItems.map(item => {
            return (
              <Link key={item.text} className="navbar-link" to={item.link}>
                <StyledSvgIcon icon={item.icon} />
                <div>{item.text}</div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
