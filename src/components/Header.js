import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  width: 100vw;
  height: 60px;
  background-color: blue;
`;

const RalphLogo = styled.p`
  font-size: 20px;
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
