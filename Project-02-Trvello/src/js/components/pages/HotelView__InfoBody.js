import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components  ---------------------------------
// -----------------------------------------------------------------------------------------
import HotelView__Imgs from './HotelView__Imgs';
import HotelView__InfoHeader from './HotelView__InfoHeader';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const temp = `
  background-color: var(--bg-color-temp);
  border: 1px dotted red;
`;

const Wrapper = styled.div`
  ${temp};
  display: flex;
  padding: 4.5rem;
`;

const BoxLeft = styled.div`${temp};
  flex: 0 0 40%;
  margin-right: 4.5rem;
`;

const BoxRight = styled.div`${temp};
  flex: 1;
`;

const BoxLeft__TextMain = styled.div`${temp};`;

const BoxLeft_BoxList = styled.div`${temp};`;

const BoxLeft_BoxPhoto = styled.div`${temp};`;

export default class HotelView__InfoBody extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        <BoxLeft>
          BoxLeft
          <BoxLeft__TextMain>Box Left Text Main</BoxLeft__TextMain>
          <BoxLeft_BoxList>Box Left Box List</BoxLeft_BoxList>
          <BoxLeft_BoxPhoto>Box Left Box Photo</BoxLeft_BoxPhoto>
        </BoxLeft>
        <BoxRight>BoxRight</BoxRight>
      </Wrapper>
    );
  }
}
