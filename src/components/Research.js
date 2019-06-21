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
              <div className="post__grid">
                <section className="post__title">
                  <h2>{p.node.frontmatter.title}</h2>
                </section>
                <section className="post__excerpt">
                  {p.node.frontmatter.description}
                  <br />
                  {/* <span className="post__date">{p.node.frontmatter.date}</span> */}
                  <Link to={p.node.fields.slug}>Read more >></Link>
                </section>
              </div>
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
