import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

import srcRealtor1 from '../../../assets/realtor-1.jpeg';
import srcRealtor2 from '../../../assets/realtor-2.jpeg';
import srcRealtor3 from '../../../assets/realtor-3.jpeg';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background-color: var(--color-secondary);
  grid-column: col-start 7 / full-end;

  color: var(--color-grey-light-2);

  display: grid;
  justify-content: center;
  align-content: center;
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;

  & > *:first-child {
    text-align: center;
    color: var(--color-primary);
    font-size: 1.6rem;
  }
`;

const Realtor = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2rem;

  & > img {
    width: 6rem;
    border-radius: 100%;
  }
`;

const RealtorInfo = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  line-height: 1;

  & > div:nth-child(1) {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: .5rem;
    padding-top: 1rem;
    font-weight: bold;
  }

  & > div:nth-child(2) {
    font-size: 1.1rem;
  }
`;

const threeRealtors = [srcRealtor1, srcRealtor2, srcRealtor3];

const Realtors = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <div> TOP 3 REALTORS </div>
        {threeRealtors.map((src, idx) => {
          const firstName = faker.name.firstName();
          const lastName = faker.name.lastName();
          return (
            <Realtor key={idx}>
              <img src={src} alt={`relatro-${idx + 1}`} />
              <RealtorInfo>
                <div>{`${firstName} ${lastName}`}</div>
                <div> {`${faker.random.number({ min: 100, max: 500 })} HOUSE SOLD`}</div>
              </RealtorInfo>
            </Realtor>
          );
        })}
      </SectionWrapper>
    </Wrapper>
  );
};

export default Realtors;
