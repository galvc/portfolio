import React from "react"
import { graphql } from "gatsby"

import {  } from "../styles/styles"
import Layout from "../components/layout"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title={siteTitle}>

        {posts.map(p => (
            <div>
             <p>{p.node.frontmatter.title}</p>
             </div>
        ))}
      </Layout>
    )
  }
}

export default Blog

export const blogPageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tag
            category
          }
          id
        }
      }
    }
  }
`
