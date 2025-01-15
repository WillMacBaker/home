import { useCallback, useEffect, useState } from "react"
import styled from 'styled-components'

import Contact from "./components/Contact"
import JumboTron from "./components/JumboTron"
import NavigationBar from "./components/NavigationBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function App() {
 
  return( 
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavigationBar />
      <JumboTron />
      <Projects />
      <Skills />
      <Contact /> 
    </main>
  )
}