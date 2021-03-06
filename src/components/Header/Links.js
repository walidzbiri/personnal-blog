import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <a href="https://gracious-easley-b90e67.netlify.app/">About Me</a>
      {/* <Link to="https://gracious-easley-b90e67.netlify.app/" activeClassName="active" aria-label="View blog page">
        About
      </Link> */}
      {/* <Link to="#" activeClassName="active" aria-label="View blog page">
        Contact
      </Link> */}

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
