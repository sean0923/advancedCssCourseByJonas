import React from 'react';
import styled from 'styled-components';
import { format } from 'money-formatter';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
import dataHomes, {
  NAME_ICON_HEART_FULL,
  NAME_ICON_KEY,
  NAME_ICON_MAP_PIN,
  NAME_ICON_PROFILE_MAIL,
  NAME_ICON_EXPAND,
} from './Homes.data';

// -----------------------------------------------------------------------------------------
// ------------------------------------ SvgIcon --------------------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../common/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  grid-column: center-start / center-end;

  padding: 7rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`;

const CardHome = styled.div`
  background-color: var(--color-grey-light-1);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3.5rem;
`;

const Text = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;

  /* justify-self: center; */
  align-self: end;

  font-size: 1.6rem;
  background-color: var(--color-secondary);
  padding: 1rem 0;
  color: #fff;

  margin: 0 10%;

  transform: translateY(50%);
  text-align: center;
`;

const Img = styled.img`
  grid-column: 1/-1;
  grid-row: 1/2;

  display: block;
  width: 100%;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  &:nth-child(odd) > *:first-child {
    margin-left: 0;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  grid-column: 1/-1;
  color: #fff;
  font-size: 1.6rem;
  padding: 1.8rem 3rem;
  border: none;
  background-color: var(--color-primary);
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled SvgIcon -------------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  display: inline-block;
  width: 2rem;
  fill: var(--color-primary);
  margin-right: 1rem;
  margin-left: 2rem;
`;

const HeartIcon = StyledSvgIcon.extend`
  width: 2.5rem;
  grid-column: 2/-1;
  grid-row: 1/2;
  margin: 1rem;
  justify-self: end;
`;

const Homes = () => {
  return (
    <Wrapper>
      {dataHomes.map(({ text, imgSrc, nameCountry, numArea, numDollar }, idx) => {
        return (
          <CardHome key={idx}>
            <Img src={imgSrc} key={`a-${idx}`} />
            <HeartIcon icon={NAME_ICON_HEART_FULL} />
            <Text>{text}</Text>

            <ItemsWrapper style={{ marginTop: '2rem' }}>
              <StyledSvgIcon icon={NAME_ICON_MAP_PIN} />
              <div>{nameCountry}</div>
            </ItemsWrapper>

            <ItemsWrapper style={{ marginTop: '2rem' }}>
              <StyledSvgIcon icon={NAME_ICON_PROFILE_MAIL} />
              <div>5 Rooms</div>
            </ItemsWrapper>

            <ItemsWrapper>
              <StyledSvgIcon icon={NAME_ICON_EXPAND} />
              <div>
                {numArea}m<sup>2</sup>
              </div>
            </ItemsWrapper>

            <ItemsWrapper>
              <StyledSvgIcon icon={NAME_ICON_KEY} />
              <div>{format('USD', numDollar * 1000000, 0)}</div>
            </ItemsWrapper>

            <Btn>contact relator</Btn>
          </CardHome>
        );
      })}
    </Wrapper>
  );
};

export default Homes;
