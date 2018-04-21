import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import Header__MidBox from './HeaderDir/Header__MidBox';
import Header__RightBox from './HeaderDir/Header__RightBox';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Imgs ----------------------------------------
// -----------------------------------------------------------------------------------------
import logoImg from '../../../../assets/logo.png';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const WrapperHeader = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-left: 3rem;
  height: 3rem;
`;

export default class Header extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <WrapperHeader>
        <LogoImg src={logoImg} alt="logo" />
        <Header__MidBox />
        <Header__RightBox />
      </WrapperHeader>
    );
  }
}
