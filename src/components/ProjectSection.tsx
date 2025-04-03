import * as React from 'react';
import styled from 'styled-components';
import { ProjectPane } from './ProjectPane';
import { projects } from './data/data';
import { stagger, animate, motion, LayoutGroup } from 'motion/react';


const ProjectItemParentDiv = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    max-width:  90%;
    margin-top: 2rem;
    justify-self: center;
    //background-color: beige;
`

const ProjectItemDiv = styled(motion.div)<{boxShadowInput: string}>`
    cursor: pointer;
    width: inherit;
    position: relative;
    max-width: 400px;
    max-height: 500px;
    max-width: auto;
    margin: 1rem;
    background-color: white;
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
    width: 100%;
    height: 100%;
    //position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    max-width: inherit;
`

const ProjectItemInfoDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    max-width: inherit;
    top: 0;
    left: 0;
    z-index: 9;
    color: white;
    background-color: ORANGE;
    text-align: center;
`
const ProjectItemImage = styled(motion.img)`
     size: auto;
`
const StyledH2 = styled.h2`
    font-size: 28px;
`

const StyledH3 = styled.h3`
    font-size: 20px;
`

const StyledText = styled.p`
    font-size: 18px;
    font-style: italic;
`

/* For now, can manually add in panes with content and links, better future approach would be an array of objects,
    with each object containing a link, image(?) and text to show*/

export const ProjectSection = () => {
    return(
        <>
        <section className='projectPaneSection'>
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
                                src={project.image}
                                />
                            </ProjectItemImageDiv>
                            <ProjectItemInfoDiv
                                whileHover={{
                                    opacity: 1,
                                    transition: {duration : 0.1}
                                }}
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

        </section>
        

        
        </>
    )
}