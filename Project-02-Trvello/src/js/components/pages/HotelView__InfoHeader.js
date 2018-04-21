import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components  ---------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../sharedComponents/SvgIcon';

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
  justify-content: space-between;
`;

const LeftBox = styled.div`
  ${temp};
  display: flex;
`;

const RightBox = styled.div`
  ${temp};
  display: flex;
`;

const HotelName = styled.div`
  ${temp};
  text-transform: uppercase;
  text-decoration: bold;
  font-size: 2rem;
  padding: 1rem 2rem;
`;

const StarBox = styled.div`
  ${temp};
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
`;

const LocationBox = styled.div`
  ${temp};

  display: flex;
  align-items: center;
`;

const RateBox = styled.div`
  ${temp};

  display: flex;
  align-items: center;
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Svg Icons  ----------------------------------
// -----------------------------------------------------------------------------------------
const SytledSvgIcon = styled(SvgIcon)`
  height: var(--size-svg-at-header-hotel-info);
  width: var(--size-svg-at-header-hotel-info);
  fill: var(--color-primary);  
`;

export default class HotelView__InfoHeader extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        <LeftBox>
          <HotelName> Hotel Name </HotelName>
          <StarBox>
            {[...Array(5).keys()].map((num, idx) => {
              return <SytledSvgIcon key={idx} icon="star" />;
            })}
          </StarBox>
        </LeftBox>
        <RightBox>
          <LocationBox>
            <div>svg icon</div>
            <div>Seoul Korea</div>
          </LocationBox>
          <RateBox>RateBox</RateBox>
        </RightBox>
      </Wrapper>
    );
  }
}
