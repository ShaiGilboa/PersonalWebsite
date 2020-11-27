import React, { PropsWithChildren } from 'react';
import { graphql } from "gatsby";
import Img from 'gatsby-image'
import styled from '@emotion/styled';
import BlockContent from '@sanity/block-content-to-react';

import MainLayout from '../layouts/main';

interface props {
  style?: React.CSSProperties,
  data: any,
};

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export const query = graphql`
  query ProjectInfo ($id : String!) {
    project: sanityProject (_id: { eq: $id}) {
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
  const { project } = data;
  console.log('project', project.body)
  return (
    <MainLayout>
      <Wrapper data-css='Project'>
        Project
      </Wrapper>
      <BlockContent blocks={project.body[0]._rawChildren} serializers={serializers}/>
    </MainLayout>
  )
}

export default Project;

const Wrapper = styled.div`

`;