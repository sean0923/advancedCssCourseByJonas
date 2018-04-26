import React from 'react';
import styled from 'styled-components';

// import getZeroToNumMinusOneArr from '../helpers/getZeroToNumMinusOneArr';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../common/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Icon Names ----------------------------------
// -----------------------------------------------------------------------------------------
import {
  ICON_NAME_GLOBAL,
  ICON_NAME_TROPHY,
  ICON_NAME_MAP_PIN,
  ICON_NAME_KEY,
  ICON_NAME_PRESENTATION,
  ICON_NAME_LOCK,
} from '../helpers/nameIcons';

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

const StyledSvgIcon = styled(SvgIcon)`
  fill: var(--color-primary-dark);
  width: 3rem;
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const featureItems = [
  { text: 'World best luxry homes', iconName: ICON_NAME_GLOBAL },
  { text: 'Only the best properties', iconName: ICON_NAME_TROPHY },
  { text: 'All homes in top locations', iconName: ICON_NAME_MAP_PIN },
  { text: 'New home in one week', iconName: ICON_NAME_KEY },
  { text: 'Top 1% relators', iconName: ICON_NAME_PRESENTATION },
  { text: 'Secure payments on XXX', iconName: ICON_NAME_LOCK },
];

const Features = () => {
  return (
    <Wrapper>
      {featureItems.map(({ text, iconName }) => {
        return (
          <div>
            <StyledSvgIcon icon={iconName} />
            <div>{text}</div>
            <div>{iconName}</div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Features;
