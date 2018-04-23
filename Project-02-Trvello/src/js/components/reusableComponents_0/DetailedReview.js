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
  margin-right: 1.5rem;
`;

const BoxBottom = styled.div`display: flex;`;

const UserName = styled.div`font-weight: bold;`;

const Date = styled.div`font-size: 1rem;`;

const Rate = styled.div`
  margin-left: auto;

  color: var(--color-primary);
  font-size: 2rem;

  display: flex;
  align-items: center;
`;

const getStrOfRandNumBtw_8_10 = () => {
  const num = 8 + Math.round(Math.random() * 200) / 100;
  return num.toString().slice(0, 4);
};

const DetailedReview = ({ src }) => {
  const pastDate = format(date.past(), 'MMM Do, YYYY');

  return (
    <Wrapper>
      <MainText>{lorem.sentence(20)}</MainText>
      <BoxBottom>
        <Img src={src} alt="user img" />
        <div>
          <UserName>{`${name.firstName()} ${name.lastName()}`}</UserName>
          <Date>{pastDate}</Date>
        </div>
        <Rate>{getStrOfRandNumBtw_8_10()}</Rate>
      </BoxBottom>
    </Wrapper>
  );
};

export default DetailedReview;
