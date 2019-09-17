import React from "react"
import { graphql } from "gatsby"

import { BioContainer } from "../styles/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BioContainer>
          <h1>Hi, I'm Chelsea</h1>
          I'm a web developer and designer. I work and thrive best at the
          intersection of design and technology. I seek to continuously improve
          myself and help lift others up.
          <p />
          I graduated at the University of Washington with a BS in Information
          Technology. Drawing, art, and video games are some of my hobbies.
          <p />
          <a
            class="btn"
            href="https://drive.google.com/file/d/1WP1SeaUJU2iZEi-bf8cr0Xx0Ns1Fm6Vw/view"
          >
            Download my resume
          </a>
          <section style={{ display: `block` }}>
            <small>
              Follow me on{" "}
              <a href={`https://twitter.com/chelseatheuser`}>Twitter</a>
              <br />
              View my <a href={`https://github.com/galvc`}>Github</a>
              <br />
              Follow me on{" "}
              <a href={`https://linkedin.com/in/galvc`}>LinkedIn</a>
              <br />
            </small>
          </section>
        </BioContainer>
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
          }
        }
      }
    }
  }
`
