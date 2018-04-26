import React from 'react';
import styled from 'styled-components';

import dataForFeatures from './Features.data';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../common/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-grey-light-2);
  grid-column: features-start / features-end;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 15rem 0;
`;

const H4 = styled.h4``;

const P = styled.p``;
// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Svg Icon ------------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  fill: var(--color-primary-dark);
  width: 3rem;
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------

const Features = () => {
  return (
    <Wrapper>
      {dataForFeatures.map(({ text, iconName, description }) => {
        return (
          <div>
            <StyledSvgIcon icon={iconName} />
            <H4>{text}</H4>
            <div>{iconName}</div>
            <P>{description}</P>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Features;
