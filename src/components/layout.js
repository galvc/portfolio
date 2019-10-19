import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { Container, Header } from "../styles/styles"
import Menu from "./Menu"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <Header>
        <span className="title">
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
      </Header>
    )

    return (
      <div>
        <Headroom>
         {header}
        </Headroom>

        <main>
            <Container>
            {children}
            </Container>
        </main>
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
