import React from "react"
import PropTypes from "prop-types"

import "../pages/mystyles.scss"
import "./layout.css"
import Navbar from './Navbar/Navbar'
import {Helmet} from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <>
      <span id="top"></span>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kristin Kee Marketing</title>
        <link rel="canonical" href="https://www.kristinkee.com" />
      </Helmet>
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
