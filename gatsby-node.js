exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        flask {
          allPosts {
            edges {
              node {
                id
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

  // Create blog articles pages.
  const articles = result.data.flask.allPosts.edges
  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.id}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.id,
      },
    })
  })
}
