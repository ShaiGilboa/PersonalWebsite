import React, { PropsWithChildren } from 'react';

import { StaticQuery, graphql, Link } from "gatsby";

import styled from '@emotion/styled';
import Navbar from '../components/general/navbar';
import MainLayout from '../layouts/main';
import Main from '../components/general/main';

interface props {
  style?: React.CSSProperties,
  
};

const About : React.FC<PropsWithChildren<props>> = () => {

  return (
    <MainLayout>
    <Navbar />
    <Main>
      <Wrapper data-css='About'>
        About
      </Wrapper>
    </Main>
    </MainLayout>
  )
}

export default About;

const Wrapper = styled.div`

`;