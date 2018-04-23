import React from 'react';
import styled from 'styled-components';

const absCenter = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const absAbove = `
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  border-top: var(--line);

  background-color: var(--color-grey-light-1);
  padding: 3.5rem 0 4.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: var(--color-grey-dark-3);
`;

const Btn = styled.button`
  position: relative;

  cursor: pointer;

  text-transform: uppercase;
  background-image: linear-gradient(135deg, var(--color-primary-light), var(--color-primary-dark));
  color: var(--color-grey-light-1);
  font-size: 1.4rem;
  border-radius: 999px;

  overflow: hidden;

  &:hover > *:first-child {
    transform: translateY(100%);
  }

  &:hover > *:last-child {
    ${absCenter};
  }

  & > * {
    padding: 1.5rem 7.5rem;
    display: block;
    height: 100%;
    width: 100%;
    /* some how width n height 100% is important */

    transition: all .2s;
  }

  & > *:last-child {
    padding: 1.5rem 0;
    ${absAbove};
  }
`;

const HotelView__Footer = () => {
  return (
    <Wrapper>
      <Text>Good news. We have 4 free rooms for your selected dates!</Text>
      <Btn>
        <span>Book</span>
        <span>Only 4 rooms left</span>
      </Btn>
    </Wrapper>
  );
};

export default HotelView__Footer;
