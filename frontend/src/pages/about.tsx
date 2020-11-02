import React, { PropsWithChildren } from 'react';

import { StaticQuery, graphql, Link } from "gatsby";

import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  
};

const About : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='About'>
      About
    </Wrapper>
  )
}

export default About;

const Wrapper = styled.div`

`;