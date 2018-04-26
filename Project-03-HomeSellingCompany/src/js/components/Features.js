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
  grid-column: features-start / features-end;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;

  margin: 15rem 0;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 3rem;
`;

const H4 = styled.h4`
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.9rem;
  color: var(--color-grey-dark-1);

  margin-bottom: 1.25rem;
`;

const P = styled.p`
  font-family: var(--font-primary);
  font-size: 1.7rem;
`;
// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Svg Icon ------------------------------------
// -----------------------------------------------------------------------------------------
const StyledSvgIcon = styled(SvgIcon)`
  fill: var(--color-primary-dark);
  width: 4.5rem;
  height: 4.5rem;
  transform: translateY(-1.25rem);
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------

const Features = () => {
  return (
    <Wrapper>
      {dataForFeatures.map(({ text, iconName, description }) => {
        return (
          <ItemWrapper>
            <StyledSvgIcon icon={iconName} />
            <div>
              <H4>{text}</H4>
              <P>{description}</P>
            </div>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Features;
