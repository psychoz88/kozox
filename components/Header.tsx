import React from 'react';
import styled from 'styled-components';

import {Green, NW2Primary} from './constants/styleVars';

const StyledDiv = styled.div`
  background: ${NW2Primary};
`;

const Title = styled.h1`
  color: ${Green};
`;

const Header = () => {
  return (
    <>
      <StyledDiv>
        <Title>Kozox</Title>
      </StyledDiv>
    </>
  );
};

export default Header;
