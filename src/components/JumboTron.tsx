import * as React from 'react';
import styled from 'styled-components';
import portrait from '../assets/images/definitelyMe.jpeg'
import { motion } from 'motion/react';



const StyledSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    justify-self: center;
`

const PortraitContainer = styled(motion.div)`

`

const PortraitContainerFigure = styled(motion.figure)`
    display: flex;
    background-color:purple;
    width: 40vh;
    padding: 20px;
`

const StyledImageContainer = styled(motion.img)`
    height: auto;
    width: 100%;
`

const JumboTronTopSection = styled(motion.div)`
    display: inline-flex;
    flex-direction: row;
    // UPDATE BACKGROUND IMAGE REFERENCE, MAYBE CHANGE TO PATTERN INSTEAD
    background-image: repeating-linear-gradient(30deg, #d8f7fb,#d8f7fb 20vw,#ffffff 20vw,#ffffff 40vw,#f2ebc6 40vw,#f2ebc6 60vw,#ffffff 60vw,#ffffff 80vw,#cbf9df 80vw,#cbf9df 100vw,#ffffff 100vw,#ffffff 120vw);
    //background-color: var(--purple);
    color: var(--yellow);
`
const JumboTronContentDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    //background-color: red;
`

const JumboTronBottomSection = styled(motion.div)`
    //background-color: var(--yellow);
    color: var(--purple);
`

const StyledButton = styled.button<{$color?: string}>`
    background-color: ${({$color}) => $color || "purple"};
    cursor: pointer;
    border-radius: 0%;
    text-align: center;
    width: 50px;
    height: 50px;
`

interface IJumbotron{
    name?: string
    age?: number
    job?: string
    buttonColor?: string
    colorScheme?: boolean
}


export const JumboTron = ({name, age, job, buttonColor}: IJumbotron) => {
    return(
        <StyledSection className="jumboTronContainer">
            <JumboTronTopSection className="jumboTronTopSection">
                <JumboTronContentDiv>
                    <motion.article className="pageHeader"
                    initial={{opacity: "0%"}}
                    animate={{opacity:"100%"}}>
                        <div>
                            <h1>
                                Hi! I'm {name}.
                            </h1>
                            <h2>
                                I like to make React Projects and other fun things!
                            </h2>
                        </div> 
                    </motion.article>
                </JumboTronContentDiv>
                <PortraitContainer className="portraitContainer"
                initial={{opacity: "0%"}}
                animate={{opacity:"100%"}}>
                    {/* Todo: to replace this figure and img with a generic image component, that
                        can take parameters to define basic styling, like width, height...
                        Currently handled in bootleg way via standard index.css
                        */}
                    <PortraitContainerFigure>
                        <StyledImageContainer className="portrait" src="./src/assets/images/definitelyMe.jpeg"></StyledImageContainer>
                    </PortraitContainerFigure>
                </PortraitContainer>  
            </JumboTronTopSection>
            <JumboTronBottomSection>
                <div>
                    <ul className="pageHeaderSubHighlights">
                        <li>
                            I'm currently working on my JavaScript and React Library skills
                        </li>
                        <li>
                            I'm also working on my styling and page design abilities!
                        </li>
                    </ul>
                </div>
            </JumboTronBottomSection>
        </StyledSection>
    )
}