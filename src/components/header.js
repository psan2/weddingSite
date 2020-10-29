import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import fezPng from "../images/fez.png"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        minWidth: 500,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          color: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ float: "left" }}>
            <img
              style={{ margin: "0 auto", width: 50 }}
              src={fezPng}
              alt="Fez logo"
            />
          </span>
          <span
            style={{
              fontSize: "1.5rem",
              justifyContent: "center",
              paddingLeft: "5px",
            }}
          >
            Mantucci Wedding 2020
          </span>
        </div>
      </Link>
      <ul
        style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto" }}
      >
        <a
          style={{
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "black",
            padding: "10px",
            borderBottom: "1px solid black",
          }}
          href="https://www.mcdowellmountaingc.com/"
        >
          Venue
        </a>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
