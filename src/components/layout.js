import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { rhythm, scale } from "../utils/typography"

import Menu from "./Menu"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <div class="head">
        <span
          style={{
            ...scale(2 / 2.25),
            fontWeight: "bold",
            display:"inline-block",
            color: "#1233ED",
            width: "auto",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
          </span>
        <Menu />
      </div>
    )

    return (
      <div>
        <Headroom>
          <header>{header}</header>
        </Headroom>

        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    )
  }
}

export default Layout
