import React from 'react';
import styled from 'styled-components';
import { lorem, name, date } from 'faker';
import { format } from 'date-fns';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  padding: 3rem;
  background-color: #fff;
  box-shadow: var(--box-shawdow-2);
`;

const MainText = styled.div`margin-bottom: 3rem;`;

const Img = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const DetailedReview = ({ src }) => {
  const pastDate = format(date.past(), 'MMM Do, YYYY');

  return (
    <Wrapper>
      <MainText>{lorem.paragraph(1)}</MainText>
      <Img src={src} alt="user img" />
      <div>
        <div>{`${name.firstName()} ${name.lastName()}`}</div>
        <div>{pastDate}</div>
      </div>
      <div>rate</div>
    </Wrapper>
  );
};

export default DetailedReview;
