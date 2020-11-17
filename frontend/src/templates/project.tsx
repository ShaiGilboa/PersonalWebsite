import React, { PropsWithChildren } from 'react';
import { graphql } from "gatsby";
import Img from 'gatsby-image'
import styled from '@emotion/styled';
import MainLayout from '../layouts/main';

interface props {
  style?: React.CSSProperties,
  data: any,
};

export const query = graphql`
  query ProjectInfo ($id : String!) {
    info: sanityProject (_id: { eq: $id}) {
      description
      title
      mainImage {
        asset {
          url
          path
          fluid(maxHeight: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      techs {
        title
        link
      }
      status
      links {
        url
        description
      }
      body {
        _key
        _type
        style
        list
        _rawChildren
      }
    }
  }
`

const Project : React.FC<PropsWithChildren<props>> = ({ data }) => {
  console.log('data', data)
  return (
    <MainLayout>
      <Wrapper data-css='Project'>
        Project
      </Wrapper>
    </MainLayout>
  )
}

export default Project;

const Wrapper = styled.div`

`;