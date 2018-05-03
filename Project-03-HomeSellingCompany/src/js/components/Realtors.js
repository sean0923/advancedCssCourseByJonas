import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

import srcRelator1 from '../../../assets/realtor-1.jpeg';
import srcRelator2 from '../../../assets/realtor-2.jpeg';
import srcRelator3 from '../../../assets/realtor-3.jpeg';

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

const RelatorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2rem;

  & > img {
    width: 6rem;
    border-radius: 100%;
  }
`;

const RelatorInfo = styled.div`
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

const threeRelators = [srcRelator1, srcRelator2, srcRelator3];

const Realtors = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <div> TOP 3 RELATORS </div>
        {threeRelators.map((src, idx) => {
          const firstName = faker.name.firstName();
          const lastName = faker.name.lastName();
          return (
            <RelatorWrapper key={idx}>
              <img src={src} alt={`relatro-${idx + 1}`} />
              <RelatorInfo>
                <div>{`${firstName} ${lastName}`}</div>
                <div> {`${faker.random.number({ min: 100, max: 500 })} HOUSE SOLD`}</div>
              </RelatorInfo>
            </RelatorWrapper>
          );
        })}
      </SectionWrapper>
    </Wrapper>
  );
};

export default Realtors;
