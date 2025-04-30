import styled from 'styled-components';
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
    @media (min-width:768px) {
        max-width: 240px;
        max-height: 240px;
    }

    @media (min-width:992px) {
        max-width: 314px;
        max-height: 314px;
    }

    @media (min-width:1200px) {
        max-width: 380px;
        max-height: 380px;
    }
    display: flex;
    width: 40vh;
    padding: 20px;
`

const StyledImageContainer = styled(motion.img)`
    @media (min-width:768px) {
        max-width: 240px;
        max-height: 240px;
    }

    @media (min-width:992px) {
        max-width: 314px;
        max-height: 314px;
    }

    @media (min-width:1200px) {
        max-width: 380px;
        max-height: 380px;
    }
    height: auto;
    width: 100%;
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #ee82ee;
`

const JumboTronTopSection = styled(motion.div)`
    display: inline-flex;
    flex-direction: row;
    // UPDATE BACKGROUND IMAGE REFERENCE, MAYBE CHANGE TO PATTERN INSTEAD

    //background-color: var(--purple);
    color: var(--yellow);
`
const JumboTronContentDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

const JumboTronBottomSection = styled(motion.div)`
    //background-color: var(--yellow);
    color: var(--purple);
`

// const StyledButton = styled.button<{$color?: string}>`
//     background-color: ${({$color}) => $color || "purple"};
//     cursor: pointer;
//     border-radius: 0%;
//     text-align: center;
//     width: 50px;
//     height: 50px;
// `

const StyledTextDiv = styled(motion.div)`
color: red;
    text-align: center;
    position: relative;
    
    margin: 1rem;
    width: 300px;
    max-width: 100%;
    font-family: monospace;
    padding: 25px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #E8793F;
    display: flexbox;
    background-color: aliceblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
    /* PLACEHOLDER STYLING, NEED TO GET CREATIVE WITH THIS */
    h1{
        font-size: 50px;
        text-shadow: 2px 2px 0 #E8793F, 2px 2px 0 white;
    }

    h2{
        font-size: 28px;
    }

    p{
        font-size: 18px;
    }

`

const Header = styled.h2`
    color: red;
    text-align: center;
    position: relative;
    margin: 1rem;
    max-width: 100%;
    font-family: monospace;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #E8793F;
`

export const JumboTron = () => {
    return(
        <StyledSection className="jumboTronContainer">
            <JumboTronTopSection className="jumboTronTopSection">
                <JumboTronContentDiv>
                    <motion.article className="pageHeader"
                    initial={{opacity: "0%"}}
                    animate={{opacity:"100%"}}>
                        <StyledTextDiv>
                            <h1>
                                Hi! I'm Will!
                            </h1>
                            <h2>
                                I like to make React Projects and other fun things!
                            </h2>
                            <p>I've worked as a front-end developer for a year, working with React & TypeScript</p>
                            <p>Cypress Testing, Git, Gitlab</p>
                        </StyledTextDiv> 
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
                <Header>Check out some of my technical challenge work below:</Header>
            </JumboTronBottomSection>
        </StyledSection>
    )
}