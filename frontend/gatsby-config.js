/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
    `gatsby-plugin-react-helmet`
  ],
}
