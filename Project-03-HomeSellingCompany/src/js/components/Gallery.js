import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-secondary);
  grid-column: full-start / full-end;
`;

const Gallery = () => {
  return (
    <Wrapper>
      Gallery
    </Wrapper>
  );
};

export default Gallery;