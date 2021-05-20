import React, { useState } from 'react' 
import ProjectCard from './ProjectCard'
import './ProjectDisplay.css'

export const ProjectDisplay = () => {

    return (
        <section className="project-display" id="project-display">
            <h1 class="font-large">Projects</h1>
            <div>
                <ProjectCard />
            </div>
        </section>
    )
};

export default ProjectDisplay;