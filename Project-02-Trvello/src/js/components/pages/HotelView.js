import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components  ---------------------------------
// -----------------------------------------------------------------------------------------
import HotelView__Imgs from './HotelView__Imgs';
import HotelView__Header from './HotelView__Header';
import HotelView__Body from './HotelView__Body';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  /* background-color: rgba(0, 255, 0, .2); */
  flex: 1;

  /* FOR TESTING ONLY */
  /* height: 999px; */
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
        <HotelView__Header />
        <HotelView__Body />
      </Wrapper>
    );
  }
}
