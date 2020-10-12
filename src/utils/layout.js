import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../utils/global"
import { baseTheme } from "../utils/theme"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
