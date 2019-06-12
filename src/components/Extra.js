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
          <li>ChickTech Seattle</li>
          <li>UX Convey - Volunteer, Attendee</li>
          <li>Hopper x 1 Seattle - Scholar Attendee</li>
        </ul>
      </span>

      <h2>Organizations</h2>
      <span>Orange Paper - Web Design & Illustrator Volunteer</span>
    </ExtraLayout>
  )
}

export default Bio
