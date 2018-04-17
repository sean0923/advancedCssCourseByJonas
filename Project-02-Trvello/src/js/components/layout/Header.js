import React, { Component } from 'react';

import SvgIcon from '../SvgIcon';
import logo from '../../../../assets/logo.png';


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="logo" />
        Header
      </div>
    );
  }
}
