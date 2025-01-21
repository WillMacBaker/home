import { useCallback, useEffect, useState } from "react"
import styled from 'styled-components'



import Contact from "./components/Contact"
import {JumboTron} from "./components/JumboTron"
import NavigationBar from "./components/NavigationBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import background from "./assets/pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg"


export default function App() {
 
  return( 
    <main >
      <NavigationBar />
      <JumboTron name="Will" age={27} job="developer?" />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> 
    </main>
  )
}