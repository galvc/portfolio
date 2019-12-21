import React from "react"
import { Link } from "gatsby"
import { PostContainer } from "../styles/styles"

function PostCard({ data }) {
  const { fields, frontmatter } = data
  const { title, description, featuredImage, category, tag } = frontmatter
  const { slug } = fields
  return (
    <PostContainer>
      <Link to={slug}>
        {/* <img
        src={featuredImage.childImageSharp.fluid.src}
      /> */}

        <div className="card__wrap">
          <div
            class="card__image"
            style={{
              backgroundImage: `url(${featuredImage.childImageSharp.sizes.src})`,
            }}
          />
          <span className="card__details">
            <span class="text__tag">{tag}</span>
            <h2>{title}</h2>
            <p class="text__desc">{description}</p>
          </span>
        </div>
      </Link>
    </PostContainer>
  )
}

export default PostCard
