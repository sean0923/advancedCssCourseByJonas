import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-secondary);
  grid-row: 1/2;
  grid-column: full-start / col-end 6;
`;

const Header = () => {
  return (
    <Wrapper>
      Header
    </Wrapper>
  );
};

export default Header;