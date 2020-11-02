import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { MEDIA } from '../../utils/constants';

interface props {
  style?: React.CSSProperties,
  
};

const Navbar : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='Navbar'
      
    >
      <Content>

      </Content>
    </Wrapper>
  )
}

export default Navbar;

const Wrapper = styled.div`
  grid-area: navbar;
  background-color: red;

  @media (min-width: ${MEDIA.tablet}) {
    width: 3rem;
    height: 100vh;
  }
`;

const Content = styled.div`

`;