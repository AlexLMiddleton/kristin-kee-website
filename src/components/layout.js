import React from "react"
import PropTypes from "prop-types"

import "../pages/mystyles.scss"
import "./layout.css"
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <span id="top"></span>
      <Navbar />
      <div>
        <main>{children}</main>
        <div style={{textAlign: 'center', backgroundColor: '#2eccbd', color: 'white'}}>
          <a href='#top'>Back to top</a>
          <footer>
            © {new Date().getFullYear()}, Kristin Kee
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
