import styled from 'styled-components';
import { motion } from 'motion/react';
//const BASE_URL = import.meta.env.BASE_URL;

// TODO
/* 
Work on creating some animated orchestration, so this jumbotron will proc first, with box shadows loading in, THEN
content for main textbox, then image, THEN technical challenge header, ONCE you scroll down.


*/

const StyledSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
`

// const PortraitContainer = styled(motion.div)`

// `

// const PortraitContainerFigure = styled(motion.figure)`
//     @media (min-width:768px) {
//         max-width: 240px;
//         max-height: 240px;
//     }

//     @media (min-width:992px) {
//         max-width: 314px;
//         max-height: 314px;
//     }

//     @media (min-width:1200px) {
//         max-width: 380px;
//         max-height: 380px;
//     }
//     display: flex;
//     width: 40vh;
//     padding: 20px;
// `

// const StyledImageContainer = styled(motion.img)`
//     @media (min-width:768px) {
//         max-width: 240px;
//         max-height: 240px;
//     }

//     @media (min-width:992px) {
//         max-width: 314px;
//         max-height: 314px;
//     }

//     @media (min-width:1200px) {
//         max-width: 380px;
//         max-height: 380px;
//     }
//     height: auto;
//     width: 100%;
//     box-shadow: 5px 5px 0 #000, 10px 10px 0 #ee82ee;
// `

const JumboTronTopSection = styled(motion.div)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`
const JumboTronContentDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

const JumboTronBottomSection = styled(motion.div)`
    //background-color: var(--yellow);
    color: var(--purple);
`

const StyledTextDiv = styled(motion.div)`
    text-align: center;
    position: relative;
    margin: 1rem;
    width: 400px;
    max-width: 100%;
    font-family: monospace;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #E8793F;
    display: flexbox;
    background-color: aliceblue;
    font-family: Arial, Helvetica, sans-serif;
    /* PLACEHOLDER STYLING, NEED TO GET CREATIVE WITH THIS */
    h1{
        font-size: 50px;
        font-weight: bolder;
        //text-shadow: 2px 2px 0 #E8793F, 2px 2px 0 white;
    }

    h2{
        font-size: 28px;
        font-weight: bold;
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
            <JumboTronTopSection className="jumboTronTopSection"
            initial={{opacity: "0%"}}
            animate={{opacity:"100%"}}>
                <JumboTronContentDiv>
                    <motion.article className="pageHeader"
                    >
                        <StyledTextDiv>
                            <h1>
                                Hi! I'm Will!
                            </h1>
                            <h2>
                                I like to make React Projects and other fun things!
                            </h2>
                            <p>I've worked as a front-end developer for a year, working with React & TypeScript</p>
                            {/* <p>Cypress Testing, Git, Gitlab</p> */}
                        </StyledTextDiv> 
                    </motion.article>
                </JumboTronContentDiv>
                {/* <PortraitContainer>
                    {/* Todo: to replace this figure and img with a generic image component, that
                        can take parameters to define basic styling, like width, height...
                        Currently handled in bootleg way via standard index.css
                        }
                    <PortraitContainerFigure>
                        <StyledImageContainer src={BASE_URL + "/assets/images/definitelyMe.jpeg"}></StyledImageContainer>
                    </PortraitContainerFigure>
                </PortraitContainer>   */}
            </JumboTronTopSection>
            <JumboTronBottomSection
            initial={{opacity: "0%"}}
            animate={{opacity:"100%"}}>
            <Header>Check out some of my technical challenge work below:</Header>
            </JumboTronBottomSection>
        </StyledSection>
    )
}