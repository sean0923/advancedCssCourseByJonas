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
} from './Homes.data';

// -----------------------------------------------------------------------------------------
// ------------------------------------ SvgIcon --------------------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../common/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Text = styled.div``;
const Btn = styled.button`text-transform: uppercase;`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled SvgIcon -------------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  width: 3rem;
  fill: var(--color-primary-dark);
`;

const Homes = () => {
  return (
    <Wrapper>
      {dataHomes.map(({ text, imgSrc, nameCountry, numArea, numDollar }, idx) => {
        return (
          <div key={idx}>
            <Img src={imgSrc} key={`a-${idx}`} />
            <StyledSvgIcon icon={NAME_ICON_HEART_FULL} />
            <Text key={`b-${idx}`}>{text}</Text>
            <div>{nameCountry}</div>
            <div>
              {numArea}m<sup>2</sup>
            </div>
            <div>{format('USD', numDollar * 1000000, 0)}</div>
            <Btn>contact relator</Btn>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Homes;
