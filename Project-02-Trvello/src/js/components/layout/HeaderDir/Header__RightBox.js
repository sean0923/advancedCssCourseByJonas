import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import SvgIcon from '../../sharedComponents/SvgIcon';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import User Img ------------------------------------
// -----------------------------------------------------------------------------------------
import profileImg from '../../../../../assets/user.jpg';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > * {
    padding: .5rem;
    align-self: stretch;

    display: flex;
    align-items: center;
  }

  & > *:hover {
    cursor: pointer;
    background: var(--color-grey-light-4);
  }
`;

const WrapperSvgIcon = styled.div`
  position: relative;
  padding: 2rem;
`;

const StyledSvgIcon = styled(SvgIcon)`
  width: 2.5rem;
  height: 2.5rem;
`;

const CircleWithNum = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(65%, -139%);

  background: var(--color-primary);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  color: #fff;
`;

const Num = styled.span`
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);

  font-size: .8rem;
`;

const ProfileWrapper = styled.div`
  padding-right: 2rem;
  & > :first-child {
    margin-right: 1rem;
  }
`;

const ProfileImg = styled.img`
  height: 3rem;
  border-radius: 50%;
`;

export default class Header__RightBox extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <Wrapper>
        {['bookmark', 'chat'].map((name, idx) => {
          return (
            <WrapperSvgIcon key={name}>
              <StyledSvgIcon icon={name} />
              <CircleWithNum>
                <Num>{(idx + 2) * 2}</Num>
              </CircleWithNum>
            </WrapperSvgIcon>
          );
        })}
        <ProfileWrapper>
          <ProfileImg src={profileImg} alt="user" />
          <span>Not Sean</span>
        </ProfileWrapper>
      </Wrapper>
    );
  }
}
