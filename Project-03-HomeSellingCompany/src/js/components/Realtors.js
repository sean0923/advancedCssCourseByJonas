import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: yellow;
  grid-column: col-start 7 / full-end;
`;

const Realtors = () => {
  return (
    <Wrapper>
      Realtors
    </Wrapper>
  );
};

export default Realtors;