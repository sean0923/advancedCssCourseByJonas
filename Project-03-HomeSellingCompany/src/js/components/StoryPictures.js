import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Imgs ---------------------------------------=
// -----------------------------------------------------------------------------------------
import ImgBackground from '../../../assets/back.jpg';
import ImgStory_1 from '../../../assets/story-1.jpeg';
import ImgStory_2 from '../../../assets/story-2.jpeg';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background: var(--color-primary);
  grid-column: full-start / col-end 4;

  position: relative;

  background-image: linear-gradient(var(--color-primary-opaque), var(--color-primary-opaque)),
    url(${ImgBackground});

  padding: 10rem;
`;

const Img = styled.img`
  width: 100%;
  &:nth-child(2) {
    position: absolute;
    top: 67%;
    left: 80%;
    transform: translate(-50%, -50%);

    width: 55%;
  }
`;

const StoryPcitures = () => {
  return (
    <Wrapper>
      <Img src={ImgStory_1} alt="img-1" />
      <Img src={ImgStory_2} alt="img-2" />
    </Wrapper>
  );
};

export default StoryPcitures;
