import React, { Component } from 'react';
import styled from 'styled-components';

import SvgIcon from '../SvgIcon';

import logo from '../../../../assets/logo.png';

import * as Styled from './Header.styles';

const StyledSvgIcon = styled(SvgIcon)`
  width: 3rem;
  height: 3rem;
`;

export default class Header extends Component {
  renderIconBox() {
    return <Styled.iconBox>iconBox</Styled.iconBox>;
  }

  renderInputBox() {
    return (
      <Styled.inputBox>
        <form action="#">
          <input type="text" />
          <StyledSvgIcon icon="magnifying-glass" />
        </form>
      </Styled.inputBox>
    );
  }

  render() {
    return (
      <div className="header">
        <Styled.flex>
          <Styled.img src={logo} alt="logo" />
          {this.renderInputBox()}
          {this.renderIconBox()}
        </Styled.flex>
      </div>
    );
  }
}
