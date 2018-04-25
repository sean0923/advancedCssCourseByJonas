import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-secondary);
  grid-column: col-start 5 / full-end;
`;

const StoryContetn = () => {
  return (
    <Wrapper>
      StoryContetn
    </Wrapper>
  );
};

export default StoryContetn;