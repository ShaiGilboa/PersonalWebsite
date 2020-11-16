import React, { PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { StaticQuery, graphql, Link } from "gatsby"

import { COLORS, MEDIA } from '../../utils/constants';

interface props {
  style?: React.CSSProperties,
  
};

const Navbar : React.FC<PropsWithChildren<props>> = () => {
  const [openContent, setOpenContent] = useState<boolean>(true);
  return (
    <Wrapper data-css='Navbar'
      // onMouseEnter={() => setOpenContent(true)}
      // onMouseLeave={() => setOpenContent(false)}
      // onClick={() => {
      //   if (!openContent) setOpenContent(true)
      // }}
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
          logo: file (relativePath: { eq: "logo.png" }){
            childImageSharp {
              fixed (width: 125, height: 125){
                # base64
                # tracedSVG
                # width
                # height
                # src
                # srcSet
                # srcWebp
                # srcSetWebp
                # originalName
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={({pageNames, logo} : any) => (
      <Content
        open={openContent}
      >
        <Logo to={'/'}>
          <Img fixed={logo.childImageSharp.fixed}/>
        </Logo>
        <Pages>
          <Links>
            {console.log('pageNames', pageNames.edges[0])}
            {pageNames.edges.map(({node}) => {
              console.log('pageNode', node)
              return <li key={`nav-list-${node.title}`}>
                  <Link
                    to={`/${node.slug.current}`}
                    activeStyle={{ color: "red" }}
                  >
                    {node.title}
                  </Link>
                </li>
              })
            }
          </Links>
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
  background-color: ${COLORS['logo-bg']};

  @media (min-width: ${MEDIA.tablet}) {
    width: 100%;
    height: 100vh;
  }
`;

const Content = styled.div<{open : boolean}>`
  @media (min-width: ${MEDIA.tablet}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${props => props.open ? '100%' : '1rem'};
    background-color: ${COLORS['logo-bg']};
    transition: width 0.6s cubic-bezier(0.47, 1.22, 1, 1);
    align-items: center;
    justify-content: space-between;
  }
  
`;

const Logo = styled(Link)`
  padding-top: 20px;
`;

const Pages = styled.div`
  @media (min-width: ${MEDIA.tablet}) {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    align-items: center;
  }

`

const Links = styled.ul`
  @media (min-width: ${MEDIA.tablet}){
    height: 30%;
    font-size: 2rem;
  }
`;