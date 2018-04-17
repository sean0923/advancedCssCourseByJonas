import React, { Component } from 'react';
import styled from 'styled-components';

import SvgIcon from '../SvgIcon';

import logo from '../../../../assets/logo.png';
import user from '../../../../assets/user.jpg';

import * as Styled from './Header.styles';

const StyledSvgIcon = styled(SvgIcon)`
  width: 3rem;
  height: 3rem;
`;

export default class Header extends Component {
  renderSvgIcons() {
    return (
      <Styled.svgIconsBox>
        {['bookmark', 'chat'].map(name => {
          return <StyledSvgIcon key={name} icon={name} />;
        })}
      </Styled.svgIconsBox>
    );
  }

  renderProfileBox() {
    return (
      <Styled.profileBox>
        <Styled.img src={user} alt="user" />
        Not Sean
      </Styled.profileBox>
    );
  }

  renderRightHeader() {
    return (
      <Styled.rightHeaderBox>
        {this.renderSvgIcons()}
        {this.renderProfileBox()}
      </Styled.rightHeaderBox>
    );
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
      <Styled.header>
        <Styled.flex>
          <Styled.img src={logo} alt="logo" />
          {this.renderInputBox()}
          {this.renderRightHeader()}
        </Styled.flex>
      </Styled.header>
    );
  }
}
