import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"
import Extra from "../components/Extra"
import Blog from "../components/Blog"
import { Container, ProjectContainer, Box } from "../styles/styles"
import "../styles/index.css"

import pictograms from "./pictograms-small.png"

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
          {/* <h1>Projects</h1>
          <ProjectContainer>
            {posts.map(p => (
              <div key={p.node.fields.slug}>
                <PostCard data={p.node} />
              </div>
            ))}
          </ProjectContainer> */}
          <Box>
            <img
              src={pictograms}
              style={{
                width: "175px",
                height: "auto",
                display: "inline-block",
                float: "right",
              }}
            />

            <h1>Currently Working On 🗒️</h1>
            <p>
              Pictograms are customizable illustrations for your marketing
              emails and newsletters.
              <br />
              Check out the upcoming page at:{" "}
              <strong>
                <a
                  href="https://www.producthunt.com/upcoming/pictograms"
                  target="_blank"
                >
                  Product Hunt
                </a>
              </strong>
            </p>
          </Box>
          <Blog />
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
