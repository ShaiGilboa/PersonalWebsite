import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import SEO from '../components/seo';

interface props {
  style?: React.CSSProperties,
  
};

const MainLayout : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='MainLayout'>
      {/* <SEO /> */}
    </Wrapper>
  )
}

export default MainLayout;

const Wrapper = styled.div`

`;