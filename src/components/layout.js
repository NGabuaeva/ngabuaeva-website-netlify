/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import About from './About'
import Projects from './Projects'
import Greeting from './Greeting'
import Contact from './Contact'
import Navbar from './Navbar'
import FadeIn from './SharedStyles/FadeIn'
import { Circular } from 'styled-loaders-react'

const Layout = ({ loading }) => {
  return (
    <>
      {loading ? <Circular color="red" size="60px" duration="5s" />
        :

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <header>
            <Navbar />
          </header>
          <main>
            <Greeting />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer>
            © {new Date().getFullYear()}, Natalia Gabuaeva
        </footer>
        </div>
      }
    </>
  )
}


export default Layout
