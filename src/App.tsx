import { useCallback, useEffect, useState } from "react"
import styled from 'styled-components'
import "./index.css"

import {JumboTron} from "./components/JumboTron"

import Contact from "./components/Contact"
import NavigationBar from "./components/NavigationBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


export default function App() { 
  return( 
    <main >
      <div className="mainPageContent">
        {/* Nav bar will sit at top of page*/}
        <NavigationBar />
        <JumboTron name="Will" age={27} job="developer?" />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <div className="footer">
        <Footer /> 
      </div>
    </main>
  )
}