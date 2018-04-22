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
`;

const BoxLeft = styled.div`
  ${temp};
`;

const BoxRight = styled.div`
  ${temp};
`;

const TextMain = styled.div`
  ${temp};
`;

const BoxLeft_BoxList = styled.div`
  ${temp};
`;

const BoxLeft_BoxPhoto = styled.div`
  ${temp};
`;

export default class HotelView__InfoBody extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
      </Wrapper>
    );
  }
}
