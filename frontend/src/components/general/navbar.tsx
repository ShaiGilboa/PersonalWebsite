import React, { PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';
import { MEDIA } from '../../utils/constants';

interface props {
  style?: React.CSSProperties,
  
};

const Navbar : React.FC<PropsWithChildren<props>> = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Wrapper data-css='Navbar'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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