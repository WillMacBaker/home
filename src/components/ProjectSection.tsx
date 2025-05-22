//import * as React from 'react';
import styled from 'styled-components';
import { projects } from './data/data';
import { motion } from 'motion/react';

const BASE_URL = import.meta.env.BASE_URL;



const ProjectItemParentDiv = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    max-width:  50%;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    width: 75%;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    padding: 1rem;
    background-color: #fff;
    border: 4px solid #000;
    box-shadow: 5px 5px 0 #000, 4px 4px 0 #E8793F;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`

const ProjectItemDiv = styled(motion.div)<{boxShadowInput: string}>`
    cursor: pointer;
    position: relative;
    justify-self: center;
    min-width: 400px;
    min-height: 300px;
    max-width: 400px;
    max-height: 500px;
    margin: 1rem;
    padding: 1rem;
    background-color: ${({boxShadowInput}) => {
        if (boxShadowInput) {
            return boxShadowInput
        } else {
            return `white`;
        }
    }
};
    // add function here to set box-shadow to a colour added to data file!
    box-shadow: 5px 5px 0 #000, 10px 10px 0 ${({boxShadowInput}) => {
        // Bit verbose, but works
        if (boxShadowInput){
            return boxShadowInput
        } else {
            return '#ee82ee'
        }
        }
    };
`

const ProjectItemImageDiv = styled(motion.div)`
    width: auto;
    height: 100%;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 0;
    //max-width: inherit;
`

const ProjectItemInfoDiv = styled(motion.div)<{coverColor: string}>`
    display: block;
    opacity: 0;
    max-width: inherit;
    max-height: inherit;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    color: white;
    background-color: ${({coverColor}) => {
        if (coverColor) {
            return coverColor
        } else {
            return `white`;
        }
    }
};
    text-align: center;
`
const ProjectItemImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    //object-fit: contain;
`
const StyledH2 = styled.h2`
    font-size: 28px;
    max-width: inherit;
`

const StyledH3 = styled.h3`
    font-size: 20px;
    max-width: inherit;
`

const StyledText = styled.p`
    font-size: 18px;
    font-style: italic;
    max-width: auto;
    padding: 1rem;
`

const StyledSection = styled(motion.section)`
    justify-content: center;
    align-self: center;
`

/* For now, can manually add in panes with content and links, better future approach would be an array of objects,
    with each object containing a link, image(?) and text to show*/

export const ProjectSection = () => {
    return(
        <>
        <StyledSection className='projectPaneSection'>
            <div className='prePaneHeader'>
            </div>
            <ProjectItemParentDiv className='paneContainer'
                
                // Animations for layout of interior elements can go here.
                >
                {projects.map((project) => (
                    <motion.a
                    layout
                    transition={{type: "linear"}}

                    href={project.link}
                    key={project.image}
                    className='projectPane'>
                        <ProjectItemDiv className={project.title}
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
                            }}
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 1.00}}
                            boxShadowInput={project.boxShadow}
                            // ADD CODE HERE TO PASS A BOXSHADOW ARG TO STYLED
                            // COMPONENT ABOVE.
                            
                            >
                            
                            <ProjectItemImageDiv>
                                <ProjectItemImage
                                alt="gallery"
                                className="paneImage"
                                src={BASE_URL + project.image}
                                />
                            </ProjectItemImageDiv>
                            <ProjectItemInfoDiv
                                whileHover={{
                                    opacity: 1,
                                    transition: {duration : 0.1}
                                }}
                                coverColor={project.boxShadow}
                            >
                                <StyledH2>
                                    {project.title}
                                </StyledH2>
                                <StyledH3>
                                    {project.subtitle}
                                </StyledH3>
                                <StyledText>
                                    {project.description}
                                </StyledText>
                            </ProjectItemInfoDiv>
                        </ProjectItemDiv>
                    </motion.a>
                ))}
            </ProjectItemParentDiv>

        </StyledSection>
        

        
        </>
    )
}