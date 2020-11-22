import React from "react";
import { StaticQuery, graphql, Link } from "gatsby"
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import Navbar from "../components/general/navbar";
import SEO from "../components/general/seo";

import "../css/App.css"
import Layout from "../layouts/main";
import Main from "../components/general/main";
import ProjectCard from '../components/home/projectCard';
import { MEDIA } from "../utils/constants";
import { extractCorrectImageFromQuery } from "../utils/functions";

const Home = () => (
  <Layout>
    <StaticQuery
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
                techs {
                  title
                  link
                }
                mainImage {
                  asset {
                    path
                    url
                    fluid(maxHeight: 400) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
              }
            }
          }
          techs: allFile(filter: {
            sourceInstanceName: {eq: "techs"}
          }) {
            edges {
              node {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={(data : any) => (
      <>
      {console.log('data.techs.edges', data.techs.edges)}
        <TopContainer>
          <Title>Welcome</Title>
          <Content>this will something that I have to say to introduce myself</Content>
        </TopContainer>
        <ProjectsContainer>
          <ProjectsList>
            {data.projects.edges.map((project, index) => {
              // console.log('node', project.node.mainImage.asset.fixed)
            return <ProjectCard
                    key={index + project.node._id}
                    slug={`/projects/${project.node.slug.current}`}
                    title={project.node.title}
                    image={project.node.mainImage.asset.fluid}
                    description={project.node.description}
                    techs={project.node.techs}
                    techsImageQuery={data.techs.edges}
                    index={index}
                  />
              })
            }
          </ProjectsList>
        </ProjectsContainer>
      </>
      )}
    />
  </Layout>
)

export default Home;

const TopContainer = styled.div`
  
  @media (min-width: ${MEDIA.tablet}) {
    height: 90vh;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    text-align: center;

  }
`;

const Title = styled.h1`

`;

const Content = styled.p`

`;

const ProjectsContainer = styled.div`
  /* max-height: 100%; */
  /* overflow: auto; */
`;

const ProjectsList = styled.ul`

`;