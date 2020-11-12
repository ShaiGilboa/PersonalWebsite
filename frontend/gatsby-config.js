/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { SANITY_DATASET, SANITY_PROJECT_ID } = process.env
console.log('SANITY_PROJECT_ID',SANITY_PROJECT_ID)
console.log('SANITY_DATASET',SANITY_DATASET)
if(!SANITY_DATASET) {
  throw new Error('please add the Sanity Dataset to the environment variables')
}

if(!SANITY_PROJECT_ID) {
  throw new Error('please add the Sanity Project Id to the environment variables')
}

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
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: `${process.env.SANITY_PROJECT_ID}`,
        dataset: `${process.env.SANITY_DATASET}`,
        graphqlTag: 'default',
        // token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    'gatsby-source-sanity-transform-images',
  ],
}
