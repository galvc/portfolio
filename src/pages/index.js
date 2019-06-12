import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"

import { rhythm, scale } from "../utils/typography"
import { Container } from "../styles/styles"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const maxWidth = rhythm(20)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container>
          <Bio />
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          {posts.map(p => (
            <div key={p.node.fields.slug}>
              <PostCard data={p.node} />
            </div>
          ))}
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
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
