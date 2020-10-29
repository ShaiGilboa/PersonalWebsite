import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const Main : React.FC<PropsWithChildren<props>> = ({ children, }) => {

  return (
    <Wrapper data-css='Main'>
      {children}
    </Wrapper>
  )
}

export default Main;

const Wrapper = styled.div`
  grid-area: main;
`;