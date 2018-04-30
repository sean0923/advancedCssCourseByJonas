import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-secondary);
  grid-column: full-start / full-end;
  padding: 5vw;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;

  justify-content: center;

  /* justify-items: center; */
  align-items: center;
`;

const ListItem = styled.div`
  cursor: pointer;
  color: var(--color-grey-light-1);
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 1.4rem 2.8rem;
  text-align: center;
  &:hover {
    background-color: rgba(255, 255, 255, .1);
  }
`;

const CopywriteText = styled.div`
  color: var(--color-grey-light-2);
  font-size: 1.2rem;
  text-align: center;
  padding: 5vw 20vw 0 20vw;
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Footer Data ----------------------------------------
// -----------------------------------------------------------------------------------------
const dataFooter = [
  'Find you dream home',
  'request proposal',
  'download home planner',
  'contact us',
  'submit your property',
  'come work with us',
];

const copywriteText = `
Copywrite 2018 by Some Name.
Feel free to use this project for your own purpose.
This does NOT apply if you plan to produce your 
own video couse or tutorials base on this project
`;

const Footer = () => {
  return (
    <Wrapper>
      <ListWrapper>
        {dataFooter.map((strListItem, idx) => {
          return <ListItem key={idx}>{strListItem}</ListItem>;
        })}
      </ListWrapper>
      <CopywriteText> &copy; {copywriteText}</CopywriteText>
    </Wrapper>
  );
};

export default Footer;
