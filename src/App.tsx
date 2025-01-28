import { useCallback, useEffect, useState } from "react"
import styled from 'styled-components'
import "./index.css"

import {JumboTron} from "./components/JumboTron"

import Contact from "./components/Contact"
import NavigationBar from "./components/NavigationBar"
import { ProjectSection } from "./components/ProjectSection"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


export default function App() { 
  return( 
    <main >
      <div className="mainPageContent">
        {/* Nav bar will sit at top of page*/}
        <div className="navbar">
          {/* <NavigationBar /> */}
        </div>
        <JumboTron name="Will" age={27} job="developer?" buttonColor="red"/>
        <ProjectSection />
        {/* <Skills />
        <Contact /> */}
      </div>
      <div className="footer">
        <Footer /> 
      </div>
    </main>
  )
}