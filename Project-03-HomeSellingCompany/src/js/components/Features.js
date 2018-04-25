import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: black;
  grid-column: features-start / features-end;
`;

const Features = () => {
  return (
    <Wrapper>
      Features
    </Wrapper>
  );
};

export default Features;