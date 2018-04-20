import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Routes from './Routes';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  background-color: var(--color-grey-light-1);
  box-shadow: var(--box-shawdow-1);
  margin: 8rem auto;
  max-width: 120rem;
  min-height: 50rem;
`;

const SidebarAndRoutes = styled.div`display: flex;`;

class ReactRouter extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------- Render ------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Header />
          <SidebarAndRoutes>
            <Sidebar />
            <Routes />
          </SidebarAndRoutes>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default ReactRouter;
