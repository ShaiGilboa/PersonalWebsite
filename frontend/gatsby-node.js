exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // const result = await graphql(
  //   `
  //     {
  //       articles: allStrapiArticle {
  //         edges {
  //           node {
  //             strapiId
  //           }
  //         }
  //       }
  //       categories: allStrapiCategory {
  //         edges {
  //           node {
  //             strapiId
  //           }
  //         }
  //       }
  //       webpages: allStrapiWebpage {
  //         edges {
  //           node {
  //             name
  //           }
  //         }
  //       }
  //       bios: allStrapiBio {
  //         edges {
  //           node {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // if (result.errors) {
  //   throw result.errors
  // }

  // const articles = result.data.articles.edges
  // const categories = result.data.categories.edges
  // const webpages = result.data.webpages.edges

  // articles.forEach((article, index) => {
  //   createPage({
  //     path: `/articles/${article.node.strapiId}`,
  //     component: require.resolve("./src/templates/article.js"),
  //     context: {
  //       id: article.node.strapiId,
  //     },
  //   })
  // })

  // categories.forEach((category, index) => {
  //     createPage({
  //     path: `/category/${category.node.strapiId}`,
  //     component: require.resolve("./src/templates/category.js"),
  //     context: {
  //       id: category.node.strapiId,
  //     },
  //   })
  // })

  // webpages.forEach((webpage, index) => {
  //   createPage({
  //     path: `/webpage/${webpage.node.name}`,
  //     component: require.resolve("./src/templates/test.js"),
  //     context: {
  //       name: webpage.node.name,
  //     },
  //   })
  // })
}