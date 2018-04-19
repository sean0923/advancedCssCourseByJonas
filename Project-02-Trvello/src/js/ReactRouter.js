import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import Page1 from './components/Page1';

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

const SidebarAndHome = styled.div`display: flex;`;

class ReactRouter extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------- Render ------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Header />
          <SidebarAndHome>
            <Sidebar />
            <Switch>
              <Route path="/page-1" component={Page1} />
              <Route path="/" component={Home} />
            </Switch>
          </SidebarAndHome>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default ReactRouter;
