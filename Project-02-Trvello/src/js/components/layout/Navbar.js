import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../reusableComponents_0/SvgIcon';

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
const NavWrapper = styled.div`
  background-color: var(--color-grey-dark-1);
  flex: 0 0 18%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3rem 0;
`;

const NavItemText = styled.div`
  font-size: 2rem;
  line-height: 1;
  text-transform: uppercase;
  text-weight: bold;
  padding: 0 2rem;
  color: currentColor;

  z-index: 10;
`;

const CopyWriteText = styled.div`
  color: var(--color-grey-light-4);
  padding: 5rem 2rem;
  text-align: center;
`;

const StyledSvgIcon = styled(SvgIcon)`
  height: var(--size-svg-at-navbar) ;
  width: var(--size-svg-at-navbar) ;
  fill: currentColor;
  z-index: 10;
`;

export default class Navbar extends Component {
  // ---------------------------------------------------------------------------------------
  // ---------------------------------- Render ---------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <NavWrapper>
        <div>
          {navbarItems.map(item => {
            return (
              <NavLink
                key={item.text}
                className="navbar-link"
                activeClassName="navbar-link navbar-link--active"
                exact
                to={item.link}
              >
                <StyledSvgIcon icon={item.icon} />
                <NavItemText>{item.text}</NavItemText>
              </NavLink>
            );
          })}
        </div>
        <CopyWriteText>&copy; 2018 by Trevello. All rights reserved</CopyWriteText>
      </NavWrapper>
    );
  }
}
