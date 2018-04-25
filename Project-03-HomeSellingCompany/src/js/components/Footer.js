import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-column: full-start / full-end;
`;

const Footer = () => {
  return (
    <Wrapper>
      Footer
    </Wrapper>
  );
};

export default Footer;