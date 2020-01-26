import React from "react"
import PropTypes from "prop-types"

import "../pages/mystyles.scss"
import "./layout.css"
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
        {/* <footer style={{textAlign: 'center'}}>
          © {new Date().getFullYear()}, Kristin Kee
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
