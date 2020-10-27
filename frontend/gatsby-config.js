/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('process.env.SANITY_DATASET', process.env.SANITY_DATASET)
console.log('process.env.SANITY_PROJECT_ID', process.env.SANITY_PROJECT_ID)

module.exports = {
  siteMetadata: {
    title: "Shai Gilboa",
    titleTemplate: "%s · The Website",
    description:
      "Welcome!",
    url: "https://www.shaigilboa.com", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@GilboaShai",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: `${process.env.SANITY_PROJECT_ID}`,
        dataset: `${process.env.SANITY_DATASET}`,
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
