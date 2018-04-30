import React from 'react';
import styled from 'styled-components';

import srcGal_1 from '../../../assets/gal-1.jpeg';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-grey-light-1);
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  padding: 1.5rem;
  grid-gap: 1.5rem;
`;

const ImgWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Gallery = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={srcGal_1} alt={'gal img 1'} />
      </ImgWrapper>
    </Wrapper>
  );
};

export default Gallery;
