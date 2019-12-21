import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Extra from "../components/Extra"
import BlogSection from "../components/BlogSection"
import { WorkingOn } from "../styles/styles"
import "../styles/index.css"

import pictograms from "./pictograms-small.png"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>

          <Bio />
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <WorkingOn>
            <h2>Currently Working On 🗒️</h2>
            <img
              src={pictograms}
              className="workingon__pictograms"
              alt="pictograms icon"
            />
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

          </WorkingOn>
          <BlogSection />
          <Extra />
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
