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
            <div className='prePaneHeader'>
            </div>
            <div className='paneContainer'>
                {projects.map((project) => (
                    <a 
                    href={project.link}
                    key={project.image}
                    className='projectPane'>
                        <div className="individualPaneDiv">
                            <img
                            alt="gallery"
                            className="paneImage"
                            src={project.image}
                            />
                            <div>
                                <h1 className="paneTitle">
                                    {project.title}
                                </h1>
                                <h2 className="paneSubtitle">
                                    {project.subtitle}
                                </h2>
                                <p className='paneDescription'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </section>
        

        
        </>
    )
}