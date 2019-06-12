/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostCard from "./PostCard"

function RecentPosts() {
  return (
    <StaticQuery
      query={recentPostsQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges

        return (
          <div>
            {posts.map(p => (
              <PostCard data={p.node} />
            ))}
          </div>
        )
      }}
    />
  )
}

const recentPostsQuery = graphql`
  query RecentPostsQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
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
            author
            featuredImage {
              childImageSharp {
                fluid {
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

export default RecentPosts
