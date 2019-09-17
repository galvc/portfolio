import React from "react"
import { Link } from "gatsby"
import { MenuContainer } from "../styles/styles"
import { scale, rhythm } from "../utils/typography"

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Works",
    path: "/works",
  },
]

function Menu() {
  return (
    <MenuContainer>
      {menuItems.map(m => (
        <Link to={m.path}>
          <p>{m.name}</p>
        </Link>
      ))}
    </MenuContainer>
  )
}

export default Menu
