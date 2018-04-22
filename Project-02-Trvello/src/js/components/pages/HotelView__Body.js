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
  // background-color: var(--bg-color-temp);
  // border: 1px dotted red;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 4.5rem;
  font-size: 1.4rem;
`;

const BoxLeft = styled.div`
  flex: 0 0 60%;

  background-color: #fff;
  box-shadow: var(--box-shawdow-2);

  padding: 0 3rem;
  margin-right: 4.5rem;

  & > * {
    padding: 3rem 0;
  }
`;

const BoxRight = styled.div`
  ${temp};
  flex: 1;
`;

const BoxLeft_TextMain = styled.div`${temp};`;

const BoxLeft_BoxPhoto = styled.div`${temp};`;

const List = styled.ul`
  list-style: none;
  border-top: var(--line);
  border-bottom: var(--line);
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  flex: 0 0 50%;
  &::before {
    content: '';
    display: inline-block;

    /* height n width can be apply only if display is block related */
    height: 1rem;
    width: 1rem;
    margin-right: .5rem;

    background-color: var(--color-primary);
    -webkit-mask-image: url('../../../../assets/chevron-thin-right.svg');
    -webkit-mask-size: cover; /* if icon is larger than bg size cover enble icon to be seen */
  }
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data List ------------------------------------------
// -----------------------------------------------------------------------------------------
const listItems = [
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
          <List>
            {listItems.map((str, idx) => {
              return <ListItems key={idx}>{str}</ListItems>;
            })}
          </List>
          <BoxLeft_BoxPhoto>
            <div>Lucy and 3 other friends reccomand this hotel</div>
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
