import React, { useState } from "react";
import './ProjectCard.css'

export const ProjectCard = () => {

    const project = [{
        title: 'UK Covid Visualization',
        tech: 'JavaScript',
        readMe: 'Covid my read me, for your please.',
        desc: 'Covid my Desc for our pleasure.'
    }, {
        title: 'To Do Application',
        tech: 'JQuery',
        readMe: 'TODO my read me, for your please.',
        desc: 'TODO my Desc for our pleasure.'
    }, {
        title: 'Weather Search',
        tech: 'JavaScript',
        readMe: 'WEATHER my read me, for your please.',
        desc: 'WEATHER my Desc for our pleasure.'
    }, {
        title: 'Dive Guide',
        tech: 'JavaScript',
        readMe: 'DIVE GUIDE my read me, for your please.',
        desc: 'DIVE GUIDE my Desc for our pleasure.'
    }, {
        title: 'Card Battle',
        tech: 'React',
        readMe: 'CARD BATTLE my read me, for your please.',
        desc: 'CARD BATTLE my Desc for our pleasure.'
    }];

    const titleArray = project.map(i => i.title);

    const [title, setTitle] = useState('Default Proops Coming at ya!')
    const [tech, setTech] = useState('Choose a Project')
    const [readMe, setReadMe] = useState('Read Me coming soon')
    const [desc, setDesc] = useState('Descriptin coming soon')
    
    const handleClick = (e) => {
        const index = project.findIndex(i => i.title === e.target.innerHTML)
        console.log(e.target.innerHTML);
        console.log(index);
        setTitle(project[index].title);
        setTech(project[index].tech);
        setReadMe(project[index].readMe);
        setDesc(project[index].desc);
    }

    return (
    <div className="project-card-container">
        <div className="project-card-title">
        {titleArray.map((i) => (
            <button onClick={handleClick}>{i}</button>
            ))}
        </div>
        <div className="project-card-display">
            <h1>{title}</h1>
            <p>{tech}</p>
            <p>{readMe}</p>
            <p>{desc}</p>
        </div>
    </div>
    )
};

export default ProjectCard;