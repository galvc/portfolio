import React from "react"
import { scale, rhythm } from "../utils/typography"
import { Link } from "gatsby"
import ShortBio from "./ShortBio"
import { PostContainer } from "../styles/styles"

function PostCard({ data }) {
  const { excerpt, fields, frontmatter } = data
  const { title, featuredImage, category } = frontmatter
  const { slug } = fields
  return (
    <PostContainer>
      <Link to={slug}>
        {/* <img
        src={featuredImage.childImageSharp.fluid.src}
      /> */}

        <div
          style={{
            backgroundImage: `url(${featuredImage.childImageSharp.fluid.src})`,
            height: "200px",
            width: "100%",
          }}
        />
        <section>
          <span
            style={{
              fontWeight: "bold",
              ...scale(2 / 5),
              color: "#000000",
            }}
          >
            {title}
          </span>

          <br />

          <br />

          <p
            style={{
              ...scale(-1.5 / 5),
              color: "grey",
            }}
          >
            {excerpt.substring(0, 100) + "..."}
          </p>
          <br />
          <span className="tags">{category}</span>
        </section>
      </Link>
    </PostContainer>
  )
}

export default PostCard
