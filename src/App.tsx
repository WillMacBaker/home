//import { useCallback, useEffect, useState } from "react"
import styled from 'styled-components'
import { motion } from 'motion/react';


// Component imports
import {JumboTron} from "./components/JumboTron"
//import Contact from "./components/Contact"
//import NavigationBar from "./components/NavigationBar"
import { ProjectSection } from "./components/ProjectSection"
//import Skills from "./components/Skills"

// Utility imports
import "./index.css"

// Page imports 


const AppContainer = styled(motion.div)`

`

export default function App() { 
  return( 
        <main >
          <AppContainer>
            {/* Nav bar will sit at top of page*/}
            <div className="navbar">
              {/* <NavigationBar /> */}
            </div>
            <div>
            <JumboTron />
            <ProjectSection />
            {/* <Skills />
            <Contact /> */}
            </div>
          </AppContainer>
          <div className="footer">
            {/* <Footer />  */}
          </div>
        </main>
  )
}