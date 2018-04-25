import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
`;

const Header = () => {
  return (
    <Wrapper>
      Header
    </Wrapper>
  );
};

export default Header;