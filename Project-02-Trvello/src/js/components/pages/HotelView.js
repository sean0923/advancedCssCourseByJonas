import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components  ---------------------------------
// -----------------------------------------------------------------------------------------
import HotelView__Imgs from './HotelView__Imgs';
import HotelView__InfoHeader from './HotelView__InfoHeader';
import HotelView__InfoBody from './HotelView__InfoBody';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background-color: rgba(0, 255, 0, .2);
  flex: 1;

  /* FOR TESTING ONLY */
  height: 999px;
  /* FOR TESTING ONLY */
`;

export default class HotelView extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        <HotelView__Imgs />
        <HotelView__InfoHeader />
        <HotelView__InfoBody />
      </Wrapper>
    );
  }
}
