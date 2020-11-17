import React, { Children, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Seo from '../components/general/seo';
import { MEDIA } from '../utils/constants';
import GlobalStyle from '../css/globalStyles';
import { seoProps } from '../types';
import Navbar from '../components/general/navbar';
import Main from '../components/general/main';

interface props {
  style?: React.CSSProperties,
  seoProps? : seoProps,
};

const MainLayout : React.FC<PropsWithChildren<props>> = ({ seoProps, children }) => {

  return (
    <Wrapper data-css='MainLayout'>
      <GlobalStyle />
      <Seo {...seoProps} />
      <Navbar />
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

export default MainLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
  grid-template-areas:
  "navbar"
  "main";


  @media (min-width: ${MEDIA.tablet} ){
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 100%;
    grid-template-areas:
    "navbar main";
  };
  
  @media (min-width: ${MEDIA.desktop}){
  
  };
`;