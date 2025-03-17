import * as React from 'react';
import styled from 'styled-components';
import { ProjectPane } from './ProjectPane';
import { projects } from './data/data';
import { motion } from 'motion/react';


const ProjectItemParentDiv = styled.div`
    display: flex;
    max-width: 50%;
    margin-top: 2rem;
    align-items: center;
    justify-self: center;
    background-color: beige;

`

const ProjectItemDiv = styled(motion.div)`
    cursor: pointer;
    background-color: violet;
    max-width: 50%;
    margin: 1rem;
    padding: 1rem;
    justify-self: center;
`

const ProjectItemImage = styled.img`
    max-width: 500px;
    padding-top: 1rem;
`

const ProjectItemInfo = styled.div`
    background-color: green;
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
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 1.00}}>

                            <ProjectItemImage
                            alt="gallery"
                            className="paneImage"
                            src={project.image}
                            />
                            <ProjectItemInfo>
                                <h2 className="paneTitle">
                                    {project.title}
                                </h2>
                                <h3 className="paneSubtitle">
                                    {project.subtitle}
                                </h3>
                                <p className='paneDescription'>{project.description}</p>
                            </ProjectItemInfo>
                        </ProjectItemDiv>
                    </a>
                ))}
            </ProjectItemParentDiv>

        </section>
        

        
        </>
    )
}