import React from "react";
import { StaticQuery, graphql, Link } from "gatsby"
import Navbar from "../components/general/navbar";
import SEO from "../components/general/seo";

import "../css/App.css"
import "../css/index.css"
import Layout from "../layouts/main";
import Main from "../components/general/main";

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
      )}
    />
  </Layout>
)

export default Home;