import React, { PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import { StaticQuery, graphql, Link } from "gatsby"

import { MEDIA } from '../../utils/constants';

interface props {
  style?: React.CSSProperties,
  
};

const Navbar : React.FC<PropsWithChildren<props>> = () => {
  const [openContent, setOpenContent] = useState<boolean>(false);
  return (
    <Wrapper data-css='Navbar'
      onMouseEnter={() => setOpenContent(true)}
      onMouseLeave={() => setOpenContent(false)}
      onClick={() => {
        if (!openContent) setOpenContent(true)
      }}
    >
      {/* <StaticQuery
      query={graphql`
        query {
          projects: allSanityProject {
            edges {
              node {
                _id
                slug {
                  current
                }
                title
                description
                mainImage {
                  asset {
                    path
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={(data : any) => (
      <>
        <Navbar />
        <Main>
          {console.log('data', data)}
          <ul>
            {data.projects.edges.map((project, index) => {
            console.log('node', project.node)
            return <li key={index + project.node._id}>
              <Link to={`/projects/${project.node.slug.current}`}>
                {project.node.title}
              </Link>
            </li>})}
          </ul>
        </Main>
      </>
      )} */}
    {/* /> */}
      <Content
        open={openContent}
      >

      </Content>
    </Wrapper>
  )
}

export default Navbar;

const Wrapper = styled.div`
  grid-area: navbar;
  background-color: red;

  @media (min-width: ${MEDIA.tablet}) {
    width: 100%;
    height: 100vh;
  }
`;

const Content = styled(motion.div)<{open : boolean}>`
  height: 100%;
  width: ${props => props.open ? '100%' : '1rem'};
  background: blue;
  transition: width 1s cubic-bezier(0.47, 1.22, 1, 1);
`;