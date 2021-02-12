const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/ProjectDetails/index.js')
    const res = await graphql(`
        query {
            allContentfulProject ( sort: { fields: creationDate, order: DESC } ) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const projects = res.data.allContentfulProject.edges

    projects.forEach(({ node }, index) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${node.slug}`,
            context: {
                slug: node.slug,
                prev: index === 0 ? null : projects[index - 1].node,
                next: index === (projects.length - 1) ? null : projects[index + 1].node
            }
        })
    })
}