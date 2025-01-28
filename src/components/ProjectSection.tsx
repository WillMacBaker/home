import * as React from 'react';
import styled from 'styled-components';
import { ProjectPane } from './ProjectPane';
import { projects } from './data/data';

interface IProjects{
    //projectArray: Array[]
}

// {projectArray}: IProjects


/* For now, can manually add in panes with content and links, better future approach would be an array of objects,
    with each object containing a link, image(?) and text to show*/

export const ProjectSection = () => {
    return(
        <>
        <section className='projectPaneSection'>
            <div className='projectSectionHeader'>
            </div>
            <div className='paneContainer'>
                {projects.map((project) => (
                    <a 
                    href={project.link}
                    key={project.image}
                    className='projectPane'>
                        <div>
                            <img
                            alt="gallery"
                            src={project.image}
                            />
                            <div>
                                <h1>
                                    {project.title}
                                </h1>
                                <h2>
                                    {project.subtitle}
                                </h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </section>
        

        
        </>
    )
}