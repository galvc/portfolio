/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { BioLayout, BioWrap } from "../styles/styles"

import { rhythm, scale } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const { twitter, github, linkedin } = data.site.siteMetadata.social
        return (
          <BioLayout>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <BioWrap>
              Hi! My name is <strong>{author}</strong>.
              <br />
              I'm a Designer and Front End Developer.
              <br />
              <section>
                You can connect with me via{" "}
                <a href={`https://twitter.com/${twitter}`}>Twitter</a>,{" "}
                <a href={`https://github.com/${github}`}>Github</a>,{" "}
                <a href={`https://linkedin.com/in/${linkedin}`}>Linkedin</a>{" "}
              </section>
            </BioWrap>
          </BioLayout>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`

export default Bio
