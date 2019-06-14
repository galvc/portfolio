import React from "react"
import { ExtraLayout } from "../styles/styles"

import { rhythm, scale } from "../utils/typography"

function Bio() {
  return (
    <ExtraLayout>
      <h1>Community Involvement</h1>
      <h2>Events</h2>
      <span>
        <ul>
          <li>ChickTech Seattle - Attendee</li>
          <li>Convey UX (Feb 27 - Mar 1) - Volunteer, Attendee</li>
          <li>Hopper x 1 Seattle (Mar 22-23) - Scholar Attendee</li>
        </ul>
      </span>

      <h2>Organizations</h2>
      <ul>
        <li>
          <a href="http://paperoranges.com">Paper Oranges</a>- Web Design &
          Illustrator Volunteer
        </li>
      </ul>
    </ExtraLayout>
  )
}

export default Bio
