import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ProjectContainer } from "../styles/styles"
import PostCard from "../components/PostCard"

class Works extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Chelsea Galvez's Works"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ProjectContainer>
          {posts.map(p => (
            <div key={p.node.fields.slug}>
              <PostCard data={p.node} />
            </div>
          ))}
        </ProjectContainer>
      </Layout>
    )
  }
}

export default Works

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tag
            category
            featuredImage {
              childImageSharp {
                sizes(quality: 90) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
