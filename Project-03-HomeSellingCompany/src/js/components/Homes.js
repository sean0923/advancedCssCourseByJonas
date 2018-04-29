import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
import dataHomes from './Homes.data';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Text = styled.div``;

const Homes = () => {
  return (
    <Wrapper>
      {dataHomes.map(({ text, imgSrc, icon }, idx) => {
        return (
          <div>
            <Img src={imgSrc} key={`a-${idx}`} />
            <Text key={`b-${idx}`}>{text}</Text>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Homes;
