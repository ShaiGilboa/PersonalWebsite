
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
    {
      projects: allSanityProject {
          edges {
            node {
              _id
              slug {
                current
              }
            }
          }
        }
    }
      
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const projects = result.data.projects.edges
  // const categories = result.data.categories.edges
  // const webpages = result.data.webpages.edges
  // console.log('projects',projects[0])
  projects.forEach((project, index) => {
    console.log('+++++++++++++++++++++++++++')
    console.log('project.node._id',project.node._id)
    console.log('+++++++++++++++++++++++++++')
    createPage({
      path: `projects/${project.node.slug.current}`,
      component: require.resolve("./src/templates/project.tsx"),
      context: {
        id: project.node._id
      }
    })
  });

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