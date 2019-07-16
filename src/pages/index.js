import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"
import Extra from "../components/Extra"
import Research from "../components/Research"
import { rhythm } from "../utils/typography"
import { Container, ProjectContainer } from "../styles/styles"
import "../styles/index.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container>
          <Bio />
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <ProjectContainer>
            <span className="index-title">
              <h1>Projects</h1>
            </span>
            <p />
            {posts.map(p => (
              <div key={p.node.fields.slug}>
                <PostCard data={p.node} />
              </div>
            ))}
          </ProjectContainer>
          <Research />
          <Extra />
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
