import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-row: 1 / -1;
  grid-column: sidebar-start / sidebar-end;
`;

const Sidebar = () => {
  return <Wrapper>Sidebar</Wrapper>;
};

export default Sidebar;
