import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-column: full-start / col-end 4;
`;

const StoryPcitures = () => {
  return (
    <Wrapper>
      StoryPcitures
    </Wrapper>
  );
};

export default StoryPcitures;