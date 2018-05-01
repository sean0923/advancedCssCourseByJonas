import React from 'react';
import styled from 'styled-components';

import srcOfHeadLogo from '../../../assets/logo.png';
import srcOfBgImg from '../../../assets/hero.jpeg';

import srcOfCompLogo1 from '../../../assets/logo-bbc.png';
import srcOfCompLogo2 from '../../../assets/logo-forbes.png';
import srcOfCompLogo3 from '../../../assets/logo-techcrunch.png';
import srcOfCompLogo4 from '../../../assets/logo-bi.png';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  grid-row: 1/2;
  grid-column: full-start / col-end 6;

  padding: 5rem 8rem 8rem 8rem;

  background-image: linear-gradient(var(--color-secondary-opaque), var(--color-secondary-opaque)),
    url(${srcOfBgImg});
  background-size: cover;

  display:grid;
  grid-template-rows: 1fr min-content min-content 1fr min-content min-content;
  grid-gap: 1.5rem;

  & > button {
    justify-self: start;
    align-self: center;
  }
`;

const LogoBox = styled.div`
  text-align: center;
  & > img {
    width: 12rem;
  }
`;


const AsSeenOnBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 1.5rem;

  align-items: center;

  color: var(--color-grey-light-2);
  font-size: 1.4rem;
  
  &::after,
  &::before {
    content: '';
    background-color: currentColor;
    height: 1px;
  }

  /* margin-bottom: 2rem; */
`;

const CompLogoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  grid-row-gap: 3rem;

  & > img {
    height: 2.5rem;
    filter: brightness(70%);
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoBox>
        <img src={srcOfHeadLogo} alt="head logo" />
      </LogoBox>
      {/* <TitleBox> */}
        <h3 className="h3">YOUR OWN HOME</h3>
        <h1 className="h1">The ultimate personal freedom</h1>
        <button className="btn">View Our Properties</button>
      {/* </TitleBox> */}
      <AsSeenOnBox>
        <div>As seen on</div>
      </AsSeenOnBox>
      <CompLogoBox>
        <img src={srcOfCompLogo1} alt="logo 1" />
        <img src={srcOfCompLogo2} alt="logo 2" />
        <img src={srcOfCompLogo3} alt="logo 3" />
        <img src={srcOfCompLogo4} alt="logo 4" />
      </CompLogoBox>
    </Wrapper>
  );
};

export default Header;
