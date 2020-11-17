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
                    fluid(maxWidth: 10) {
                      ...GatsbySanityImageFluid
                    }
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
          <Title>Welcome</Title>
          <Content>this will something that I have to say to introduce myself</Content>
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
                    />
                })
              }
            </ProjectsList>
          </ProjectsContainer>
        </Main>
      </>
      )}
    />
  </Layout>
)

export default Home;

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