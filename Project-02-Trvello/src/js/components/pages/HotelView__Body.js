import React, { Component } from 'react';
import styled from 'styled-components';
import faker from 'faker';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Imgs  ---------------------------------------
// -----------------------------------------------------------------------------------------
import imgUser1 from '../../../../assets/user-3.jpg';
import imgUser2 from '../../../../assets/user-4.jpg';
import imgUser3 from '../../../../assets/user-5.jpg';
import imgUser4 from '../../../../assets/user-6.jpg';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const temp = `
  background-color: var(--bg-color-temp);
  border: 1px dotted red;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 4.5rem;
`;

const BoxLeft = styled.div`
  flex: 0 0 60%;

  background-color: #fff;
  box-shadow: var(--box-shawdow-2);

  padding: 3rem;
  margin-right: 4.5rem;
`;

const BoxRight = styled.div`
  ${temp};
  flex: 1;
  padding: 3rem;
`;

const BoxLeft_TextMain = styled.div`
  ${temp};
  padding: 2rem;
`;

const BoxLeft_BoxList = styled.div`
  ${temp};
  padding: 2rem;
`;

const BoxLeft_BoxPhoto = styled.div`
  ${temp};
  padding: 1rem;
`;

const List = styled.li`list-style: none;`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data List ------------------------------------------
// -----------------------------------------------------------------------------------------
const dataList = [
  'Close to the beach',
  'Breakfast included',
  'Free airport shuttle',
  'Free Woif in all rooms',
  'Air conditining & heating',
  'Pets allowed',
  'We speak all languages',
  'Perfect for foreigner',
];

const userImgSources = [imgUser1, imgUser2, imgUser3, imgUser4];

export default class HotelView__Body extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        <BoxLeft>
          <BoxLeft_TextMain>{faker.lorem.paragraph(5)}</BoxLeft_TextMain>
          <BoxLeft_BoxList>
            <List>
              {dataList.map((str, idx) => {
                return <li key={idx}>{str}</li>;
              })}
            </List>
          </BoxLeft_BoxList>
          <BoxLeft_BoxPhoto>
            {userImgSources.map((src, idx) => {
              return <img src={src} alt={`user-${idx}`} />;
            })}
          </BoxLeft_BoxPhoto>
        </BoxLeft>
        <BoxRight>BoxRight</BoxRight>
      </Wrapper>
    );
  }
}
