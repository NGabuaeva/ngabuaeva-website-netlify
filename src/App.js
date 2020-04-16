import React from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Greeting from './components/Greeting'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import { Circular } from 'styled-loaders-react'
import Fade from 'react-reveal/Fade'

const App = (loading) => (
  <>
    {!loading ? <Circular color="red" size="60px" duration="5s" />
      :

      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <header>
        </header>
        <Navbar />
        <main>
          <Greeting />
          <Fade bottom >
            <About id='about' margin-top="100px" />
          </Fade>
          <Fade bottom >
            <Projects id='projects' />
          </Fade>
          <Fade bottom  >
            <Skills id='skills' />
          </Fade>
          <Fade bottom  >
            <Contact id='contact' />
          </Fade>
        </main>
        <footer>
          © {new Date().getFullYear()}, Natalia Gabuaeva
    </footer>
      </div>
    }
  </>
)

export default App;
