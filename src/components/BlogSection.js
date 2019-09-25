import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { BlogLayout } from "../styles/styles"

function BlogSection() {
  return (
    <StaticQuery
      query={blogQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges

        return (
          <BlogLayout>
            <h1>Blog</h1>
            {posts.map(p => (
              <div>
                <Link to={p.node.fields.slug}>
                  <h2>{p.node.frontmatter.title}</h2>
                  <p>
                    {p.node.frontmatter.description}
                    <br />
                    <span style={{ textTransform: "uppercase" }}>
                      Read More ➡️
                    </span>
                  </p>
                </Link>
              </div>
            ))}
          </BlogLayout>
        )
      }}
    />
  )
}

export const blogQuery = graphql`
  query blogQuery {
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
export default BlogSection
