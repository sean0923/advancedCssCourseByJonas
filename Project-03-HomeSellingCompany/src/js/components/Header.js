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

  padding: 4rem 6rem;

  /* background-image: url(${srcOfBgImg}),
    linear-gradient(var(--color-secondary-opaque), var(--color-secondary-opaque)); */

  background-image: linear-gradient(var(--color-secondary-opaque), var(--color-secondary-opaque)),
  url(${srcOfBgImg});
  background-size: cover;
`;

const LogoBox = styled.div`
  text-align: center;
  & > img {
    width: 12rem;
  }
  margin-bottom: 13rem;
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  grid-gap: 1rem;
  margin-bottom: 8rem;

  & > *:nth-child(2) {
    margin-bottom: 2rem;
  }
`;

const AsSeenOnBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  & > div:nth-child(1),
  & > div:nth-child(3) {
    height: 1px;
    background-color: var(--color-grey-light-2);
  }

  & > div:nth-child(2) {
    padding: 1rem 2.5rem;
    color: var(--color-grey-light-2);
    font-size: 1.4rem;
  }
`;

const CompLogoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;

  & > img {
    /* width: 100%; */
    height: 100%;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoBox>
        <img src={srcOfHeadLogo} alt="head logo" />
      </LogoBox>
      <TitleBox>
        <h3 className="h3">YOUR OWN HOME</h3>
        <h1 className="h1">The ultimate personal freedom</h1>
        <button className="btn">View Our Properties</button>
      </TitleBox>
      <AsSeenOnBox>
        <div />
        <div>As seen on</div>
        <div />
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
