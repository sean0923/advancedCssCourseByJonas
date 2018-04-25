import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-column: center-start / center-end;
`;

const Homes = () => {
  return (
    <Wrapper>
      Homes
    </Wrapper>
  );
};

export default Homes;