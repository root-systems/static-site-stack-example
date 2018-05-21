const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(
    `{
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
              template
              path
            }
          }
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pageEdges = result.data.allMarkdownRemark.edges
    pageEdges.forEach((edge) => {
      const { node: { frontmatter } } = edge
      console.log('frontmatter', frontmatter)

      createPage({
        path: frontmatter.path,
        component: path.resolve(`src/templates/${frontmatter.template}.js`),
        context: { template: frontmatter.template }
      })
    })
  })
}
