import React, { PropsWithChildren } from 'react';
import { graphql } from "gatsby"
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  data: any,
};

export const query = graphql`
  query ProjectInfo ($id : String!) {
    sanityProject (_id: { eq: $id}) {
      description
      title
      mainImage {
        asset {
          url
          path
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
    <Wrapper data-css='Project'>
      Project
    </Wrapper>
  )
}

export default Project;

const Wrapper = styled.div`

`;