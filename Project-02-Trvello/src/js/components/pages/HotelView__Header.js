import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components  ---------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../reusableComponents_0/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #fff;
  border-bottom: var(--line);
`;

const BoxLeft = styled.div`
  display: flex;

  & > * {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
  }
`;

const BoxRight = styled.div`
  display: flex;

  & > * {
    padding: 1rem 2rem;
  }
`;

const BoxLeft_HotelName = styled.div`
  text-transform: uppercase;
  text-decoration: bold;
  font-size: 2rem;
`;

const BoxLeft_BoxStar = styled.div`display: flex;`;

const BoxRight_BoxLocation = styled.div`
  color: var(--color-primary);
  text-decoration: underline;

  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: .5rem;
  }

  cursor: pointer;
  &:hover {
    color: var(--color-primary-dark);
  }
`;

const BoxRight_BoxRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-light-1);
  background: var(--color-primary);
`;

const TextRate = styled.div`font-size: 1.8rem;`;

const TextVote = styled.div`font-size: .8rem;`;

const TextLocation = styled.div`font-size: 1.4rem;`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Svg Icons  ----------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  height: var(--size-svg-at-header-hotel-info);
  width: var(--size-svg-at-header-hotel-info);
  fill: currentColor;  
`;

const StyledStarSvgIcon = styled(StyledSvgIcon)`
  fill: var(--color-primary);  
`;

export default class HotelView__Header extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Sub Render ---------------------------------------
  // ---------------------------------------------------------------------------------------
  renderStars() {
    return (
      <BoxLeft_BoxStar>
        {[...Array(5).keys()].map((num, idx) => {
          return <StyledStarSvgIcon key={idx} icon="star" />;
        })}
      </BoxLeft_BoxStar>
    );
  }

  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        <BoxLeft>
          <BoxLeft_HotelName> Hotel Name </BoxLeft_HotelName>
          {this.renderStars()}
        </BoxLeft>
        <BoxRight>
          <BoxRight_BoxLocation>
            <StyledSvgIcon icon="location-pin" />
            <TextLocation>Seoul, Korea</TextLocation>
          </BoxRight_BoxLocation>
          <BoxRight_BoxRate>
            <TextRate>8.6</TextRate>
            <TextVote>429 votes</TextVote>
          </BoxRight_BoxRate>
        </BoxRight>
      </Wrapper>
    );
  }
}
