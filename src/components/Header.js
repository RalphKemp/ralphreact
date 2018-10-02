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
  font-family: 'Fredoka One', cursive;
  color: #533737;
  ${media.mid`
    margin-left: 22px;
    font-size: 24px;
  `};
`

const Header = () => {
  return (
    <HeaderDiv>
      <RalphLogo>
        RALPH KEMP
      </RalphLogo>
    </HeaderDiv>
  );
}

export default Header;
