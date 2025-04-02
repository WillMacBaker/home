import * as React from 'react';
import styled from 'styled-components';
import { ProjectPane } from './ProjectPane';
import { projects } from './data/data';
import { motion } from 'motion/react';


const ProjectItemParentDiv = styled.div`
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
    
`

const StyledH3 = styled.h3`
    
`

const StyledText = styled.p`
    
`

/* For now, can manually add in panes with content and links, better future approach would be an array of objects,
    with each object containing a link, image(?) and text to show*/

export const ProjectSection = () => {
    return(
        <>
        <section className='projectPaneSection'>
            <div className='prePaneHeader'>
            </div>
            <ProjectItemParentDiv className='paneContainer'>
                {projects.map((project) => (
                    <a 
                    href={project.link}
                    key={project.image}
                    className='projectPane'>
                        <ProjectItemDiv className={project.title}
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
                                <h2>
                                    {project.title}
                                </h2>
                                <h3>
                                    {project.subtitle}
                                </h3>
                                <p>
                                    {project.description}
                                </p>
                            </ProjectItemInfoDiv>
                        </ProjectItemDiv>
                    </a>
                ))}
            </ProjectItemParentDiv>

        </section>
        

        
        </>
    )
}