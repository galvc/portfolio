import React from "react"
import { scale, rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { PostContainer } from "../styles/styles"

function PostCard({ data }) {
  const { excerpt, fields, frontmatter } = data
  const { title, featuredImage, category, tag } = frontmatter
  const { slug } = fields
  return (
    <PostContainer>
      <Link to={slug}>
        {/* <img
        src={featuredImage.childImageSharp.fluid.src}
      /> */}
        <div
          style={{
            backgroundImage: `url(${featuredImage.childImageSharp.sizes.src})`,
            height: "200px",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="card__wrap">
          <h3>{title}</h3>
          <span className="card__tags">{tag}</span>

          {/* {excerpt.substring(0, 100) + "..."} */}
        </div>
      </Link>
    </PostContainer>
  )
}

export default PostCard
