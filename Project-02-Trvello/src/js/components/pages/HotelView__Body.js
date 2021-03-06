import React, { Component } from 'react';
import styled from 'styled-components';
import faker from 'faker';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components  ---------------------------------
// -----------------------------------------------------------------------------------------
import DetailedReview from '../reusableComponents_0/DetailedReview';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Imgs  ---------------------------------------
// -----------------------------------------------------------------------------------------
import imgUser1 from '../../../../assets/user-3.jpg';
import imgUser2 from '../../../../assets/user-4.jpg';
import imgUser3 from '../../../../assets/user-5.jpg';
import imgUser4 from '../../../../assets/user-6.jpg';

import imgUser5 from '../../../../assets/user-1.jpg';
import imgUser6 from '../../../../assets/user-2.jpg';

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

  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 4.5rem;
  }
`;

const BoxLeft_TextMain = styled.div`${temp};`;

const BoxLeft_BoxUserRecomandations = styled.div`
  ${temp};
  display: flex;
  align-items: center;
`;

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

const Img = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid #fff;
  box-sizing: content-box;
  &:not(:last-child) {
    margin-right: -1.5rem;
  }
`;

const TextUserRecommandation = styled.div`
  font-size: 1.3rem;
  margin-right: auto;
`;

const AtagShowAll = styled.a`
  display: inline-block;
  color: var(--color-primary);
  /* text-decoration: underline; */

  text-align: center;
  line-height: 1.4;
  font-weight: bold;
  cursor: pointer;

  & > div {
    display: inline-block;
    border-bottom: 1px solid currentColor;
    &:hover {
      color: var(--color-primary-dark);
      border-bottom: 1px solid currentColor;
    }
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
  // ------------------------------------ Sub Render ---------------------------------------
  // ---------------------------------------------------------------------------------------
  renderList() {
    return (
      <List>
        {listItems.map((str, idx) => {
          return <ListItems key={idx}>{str}</ListItems>;
        })}
      </List>
    );
  }

  renderUserReviewBox() {
    return (
      <BoxLeft_BoxUserRecomandations>
        <TextUserRecommandation>
          Lucy and 3 other friends reccomand this hotel
        </TextUserRecommandation>
        {userImgSources.map((src, idx) => {
          return <Img key={idx} src={src} alt={`user-${idx}`} />;
        })}
      </BoxLeft_BoxUserRecomandations>
    );
  }

  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        <BoxLeft>
          <BoxLeft_TextMain>{faker.lorem.sentence(50)}</BoxLeft_TextMain>
          <BoxLeft_TextMain style={{ paddingTop: 0 }}>{faker.lorem.sentence(30)}</BoxLeft_TextMain>
          {this.renderList()}
          {this.renderUserReviewBox()}
        </BoxLeft>
        <BoxRight>
          <DetailedReview src={imgUser5} />
          <DetailedReview src={imgUser6} />
          <AtagShowAll>
            <div>Show all &rarr;</div>
          </AtagShowAll>
        </BoxRight>
      </Wrapper>
    );
  }
}
