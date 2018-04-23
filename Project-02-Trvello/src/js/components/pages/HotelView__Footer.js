import React from 'react';
import styled from 'styled-components';

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
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: var(--color-grey-dark-3);
`;

const Btn = styled.button`
  cursor: pointer;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: var(--color-grey-light-1);
  font-size: 1.6rem;
  border-radius: 999px;
`;

const HotelView__Footer = () => {
  return (
    <Wrapper>
      <Text>Good news. We have 4 free rooms for your selected dates!</Text>
      <Btn>Only 4 rooms left</Btn>
    </Wrapper>
  );
};

export default HotelView__Footer;
