import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import Header__MidBox from './Header__MidBox';
import Header__RightBox from './Header__RightBox';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Imgs ----------------------------------------
// -----------------------------------------------------------------------------------------
import logoImg from '../../../../assets/logo.png';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`height: 5rem;`;

export default class Header extends Component {
  render() {
    return (
      <FlexWrapper className="temp">
        <LogoImg className="temp" src={logoImg} alt="logo" />
        <Header__MidBox />
        <Header__RightBox />
      </FlexWrapper>
    );
  }
}
