import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { ResearchLayout } from "../styles/styles"

function Research() {
  return (
    <StaticQuery
      query={researchQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges

        return (
          <ResearchLayout>
            <h1>Research</h1>
            {posts.map(p => (
              <section>
                <h2>{p.node.frontmatter.title}</h2>
                <span className="date">{p.node.frontmatter.date}</span>
                <span>{p.node.frontmatter.description}</span>
                <Link to={p.node.fields.slug}>Read more</Link>
              </section>
            ))}
          </ResearchLayout>
        )
      }}
    />
  )
}

export const researchQuery = graphql`
  query researchQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "research" } } }
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
export default Research
