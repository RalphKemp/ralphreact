import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/Sizing';

const HeaderDiv = styled.div`
  width: 100vw;
  height: 60px;
  background-color: transparent;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ${media.mid`
    justify-content: flex-start;
  `};
`;

const RalphLogo = styled.h1`
  font-size: 22px;
  font-family: 'Styrene B Web';
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  color: #533737;
  ${media.mid`
    margin-left: 24px;
    margin-top: 23px;
    font-size: 24px;
  `};
`

const Header = () => {
  return (
    <HeaderDiv>
      <RalphLogo>
        ralphkemp.
      </RalphLogo>
    </HeaderDiv>
  );
}

export default Header;
