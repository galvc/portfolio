import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"
import { BioLayout, BioWrap, Cross, Donut, Triangle } from "../styles/styles"
import "../styles/index.css"
import { rhythm, scale } from "../utils/typography"
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const { twitter, github, linkedin } = data.site.siteMetadata.social
        return (
          <BioLayout>
            {/* <Image
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
            /> */}
            <Cross />
            <Donut />
            <BioWrap>
              <Triangle />
              Hi! My name is <strong>{author}</strong>.
              <br />
              I'm a Designer and Front End Developer.
              <br />
              <section className="bio__social">
                <a href={`https://twitter.com/${twitter}`}>
                  <FaTwitterSquare />
                </a>{" "}
                <a href={`https://github.com/${github}`}>
                  <FaGithub />
                </a>{" "}
                <a href={`https://linkedin.com/in/${linkedin}`}>
                  <FaLinkedin />
                </a>{" "}
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
