import Typography from "typography"
import Github from "typography-theme-github"

const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.6,
  headerFontFamily: [
    "Droid Sans",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Montserrat", "serif"],
})

// Github.overrideThemeStyles = () => {
//   return {
//     "a, a:hover": {
//       textDecoration: "none",
//     },
//     "h1, h2, h3, h4": {
//       borderBottom: "none",
//       fontWeight: "normal",
//     },
//   }
// }

// const typography = new Typography(Github)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
