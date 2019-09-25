import React from "react"
import { Link } from "gatsby"
import { MenuContainer } from "../styles/styles"
import { scale, rhythm } from "../utils/typography"

const menuItems = [
//   {
//     name: "Home",
//     path: "/",
//   },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "Blog",
    path: "/blog",
  },
]

function Menu() {
  return (
    <MenuContainer>
      {menuItems.map(m => (
        <Link to={m.path}>
          {m.name}
        </Link>
      ))}
    </MenuContainer>
  )
}

export default Menu
