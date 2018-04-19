import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const FlexItemWrapper = styled.form`
  font-size: 1.4rem;

  /* parenet is display: flex */
  flex: 0 0 40%; /* flex: grow | shrink | how long of parent ? */
  /* flex item can be flex */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: var(--color-grey-light-2);
  border: none;
  padding: .7rem 2rem;
  width: 95%;
  border-radius: 9999px; /* any big num to make both side round */
  transition: all .2s;
  margin-right: -4.5rem; /* push item on right to move left */

  &:focus {
    outline: none;
    width: 100%;
    background: var(--color-grey-light-3);
  }

  &::-webkit-input-placeholder {
    font-weight: 100;
    color: var(--color-grey-light-4);
  }
`;

const SearchBtn = styled.button`
  border: none;
  background: transparent;
  fill: var(--color-grey-dark-3);

  &:focus {
    outline: none;
    fill: var(--color-grey-dark-1);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const StyledSvgIcon = styled(SvgIcon)`
  width: var(--height-width-svg);
  height: var(--height-width-svg);
`;

export default class Header__MidBox extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------- Render ------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <FlexItemWrapper >
        <Input type="text" placeholder="Search hotels" />
        <SearchBtn>
          <StyledSvgIcon icon="magnifying-glass" />
        </SearchBtn>
      </FlexItemWrapper>
    );
  }
}
