import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-row: 1 / -1;
  grid-column: sidebar-start / sidebar-end;

  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Box = styled.div`
  cursor: pointer;
  position: relative;

  width: 5rem;
  height: calc(3rem + 1.25rem + 1.25rem);

  &:hover > *::before {
    transform: translateY(-1.5rem);
  }

  &:hover > *::after {
    transform: translateY(1.5rem);
  }
`;

const NavbarIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #fff;

  width: 100%;
  height: 3px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    background-color: #fff;
    width: 100%;
    height: 3px;
    transition: all .2s;
    top: 0;
    left: 0;
  }

  &::before {
    transform: translateY(-1.25rem);
  }

  &::after {
    transform: translateY(1.25rem);
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Box>
        <NavbarIcon />
      </Box>
    </Wrapper>
  );
};

export default Sidebar;
