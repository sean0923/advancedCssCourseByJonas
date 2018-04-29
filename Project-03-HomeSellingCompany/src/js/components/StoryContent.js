import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  /* background: var(--color-secondary); */
  grid-column: col-start 5 / full-end;

  display: grid;
  grid-template-columns: 1fr;
  align-content: center;

  padding: 0 12rem;
  justify-items: start;
`;

const H2 = styled.h2`
  font-style: italic;
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 300;
  padding-right: 10rem;
`;

const H3 = styled.h3`
  text-transform: uppercase;
  color: var(--color-primary);
  font-size: 1.6rem;
  font-family: var(--font-primary);
  font-weight: bold;
`;

const Story = styled.p`font-size: 1.4rem;`;

const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 2rem;
  border: none;
  padding: 1.4rem 2.8rem;
  background-color: var(--color-primary);
  color: #fff;
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const StoryContetn = () => {
  return (
    <Wrapper>
      <H3 className="mgb-xs">Happy Customers</H3>
      <H2 className="mgb-s">&ldquo;The best decision of our lifes&rdquo;</H2>
      <Story className="mgb-m">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
        pariatur voluptatibus. Quidem consequatur harum volupta!
      </Story>
      <Button>Find you own home</Button>
    </Wrapper>
  );
};

export default StoryContetn;
