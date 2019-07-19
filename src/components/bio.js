import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"
import { BioLayout, BioWrap, BioSkills } from "../styles/styles"
import "../styles/index.css"
import { rhythm, scale } from "../utils/typography"
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa"
import { IoIosBrush, IoIosCode, IoIosTrendingUp } from "react-icons/io"

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
            <BioWrap>
              Hi! My name is <strong>{author}</strong>.
              <br />
              I'm a Web Designer and Developer.
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
              <br />
            </BioWrap>
            {/* <BioSkills>
              <span className="bio__design">
                <IoIosBrush size={40} style={{ color: "blue" }} />
                <br />I love to design
              </span>
              <span className="bio__develop">
                <IoIosCode size={40} />
                <br />I love to develop
              </span>
              <span className="bio__goals">
                <IoIosTrendingUp size={40} />
                <br />
                these are my goals
              </span>
            </BioSkills> */}
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
