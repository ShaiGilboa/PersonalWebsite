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
      <StaticQuery
      query={graphql`
        query {
          pageNames: allSanityPage {
            edges {
              node {
                title
                slug {
                  current
                }
              }
            }
          }
        }
      `}
      render={({pageNames} : any) => (
      <Content
        open={openContent}
      >
        <Pages>
          {console.log('pageNames', pageNames.edges[0])}
          {pageNames.edges.map(({node}) => {
            console.log('pageNode', node)
            return <li key={`nav-list-${node.title}`}>
                <Link to={`/${node.slug.current}`}>
                  {node.title}
                </Link>
              </li>
            })
          }
        </Pages>
      </Content>
      )}
    />
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

const Content = styled.div<{open : boolean}>`
  height: 100%;
  width: ${props => props.open ? '100%' : '1rem'};
  background: blue;
  transition: width 0.6s cubic-bezier(0.47, 1.22, 1, 1);
`;

const Pages = styled.ul`

`