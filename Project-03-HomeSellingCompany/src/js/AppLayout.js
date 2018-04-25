import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

import Header from './components/Header';
import Homes from './components/Homes';
import Realtors from './components/Realtors';

import Sidebar from './components/Sidebar';
import StoryContent from './components/StoryContent';
import StoryPictures from './components/StoryPictures';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Container = styled.div`
  display: grid;
  grid-template-rows: 80vh auto 40vw auto auto auto;
`;

class ReactRouter extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------- Render ------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Container>
        <Header />
        <Sidebar />
        <Realtors />
        <Features />
        <StoryPictures />
        <StoryContent />
        <Homes />
        <Gallery />
        <Footer />
      </Container>
    );
  }
}

export default ReactRouter;
