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
//   {
//     name: "Blog",
//     path: "https://byte-sized.netlify.com/",
//   },
]

function Menu() {
  return (
    <MenuContainer>
      <input class="menu-btn" id="menu-btn" type="checkbox" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        {menuItems.map((m, key) => (
          <li id={key}>
            <Link to={m.path}>{m.name}</Link>
          </li>
        ))}
        <li>
            <a href="https://byte-sized.netlify.com/" target="_blank" title="This link will take you to an external webpage">Blog</a>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default Menu
