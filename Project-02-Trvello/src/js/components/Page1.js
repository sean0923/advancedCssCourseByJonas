import React, { Component } from 'react'

import * as Styled from './layout/Header.styles'

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <Styled.bigBox>
          <Styled.smallBox>
            why ??
          </Styled.smallBox>
        </Styled.bigBox>

        <Styled.header>
          <Styled.flex>
            a b c
          </Styled.flex>
        </Styled.header>
        Page1
      </div>
    )
  }
}
