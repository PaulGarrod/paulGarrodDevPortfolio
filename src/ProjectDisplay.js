import React, { useState } from 'react' 
import ProjectCard from './ProjectCard'
import './ProjectDisplay.css'

export const ProjectDisplay = () => {

    return (
        <div className="project-display" id="project-display">
            <h1>Project Display Area</h1>
            <div>
                <ProjectCard />
            </div>
        </div>
    )
};

export default ProjectDisplay;