/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div
        style={{
          margin: `20px auto`,
          maxWidth: 1440,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header siteTitle="Home" />
        <main>{children}</main>
        <footer
          style={{
            marginTop: `12rem`,
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Created by
          <a
            style={{ marginLeft: "5px", textDecoration: "none" }}
            href="https://www.github.com/psan2"
          >
            Pat Santucci 🥳
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
