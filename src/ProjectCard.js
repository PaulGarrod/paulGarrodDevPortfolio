import React, { useState } from "react";
import './ProjectCard.css'

// to include when sites are finished!

// {
//     title: 'JS for Kids',
//     image: 'Shiny image incoming',
//     tech: 'JavaScript',
//     readMe: 'JS for Kids my read me, for your please.',
//     desc: 'JS for Kids my Desc for our pleasure.',
//     github: 'https://github.com/PaulGarrod/JSForKids',
//     website: '#'
// }, {
//     title: 'Dive Guide',
//     image: 'Shiny image incoming',
//     tech: 'JavaScript',
//     readMe: 'DIVE GUIDE my read me, for your please.',
//     desc: 'DIVE GUIDE my Desc for our pleasure.',
//     github: 'https://github.com/PaulGarrod/Koh-Tao-Dive-Guide',
//     website: '#'
// }

export const ProjectCard = () => {

    const project = [{
        title: 'UK Covid Data Visualization',
        image: 'covidLaptopNoBG.png',
        tech: 'JavaScript',
        readMe: 'Fetch API used to retrieve the UK Government Covid-19 Data. Data manipulated to create relevant arrays allowing for the creation of two bar charts (created using Chart.JS). Charts data can be toggled on/ off by clicking the chart keys. Below the charts, todays data is displayed as numbers. Use the date select tool to display the data of any date available in the same format as todays date - allowing simple comparisons between two dates.',
        desc: 'Displaying the UK Covid-19 Data in an easy to digest manner.',
        github: 'https://github.com/PaulGarrod/UKCovidData',
        website: 'https://uk-covid-data.netlify.app/'
    }, {
        title: 'To Do Application',
        image: 'todoAppNoBG.png',
        tech: 'JQuery',
        readMe: 'TODO my read me, for your please.',
        desc: 'TODO my Desc for our pleasure.',
        github: 'https://github.com/PaulGarrod/toDoList',
        website: 'https://paulgarrod-todolist.netlify.app/'
    }, {
        title: 'Weather Search',
        image: 'weatherAppNoBG.png',
        tech: 'JavaScript',
        readMe: 'WEATHER my read me, for your please.',
        desc: 'WEATHER my Desc for our pleasure.',
        github: 'https://github.com/PaulGarrod/weatherApp2',
        website: 'https://current-weather-search.netlify.app/'
    }, {
        title: 'Card Battle',
        image: 'Shiny image incoming',
        tech: 'React',
        readMe: 'CARD BATTLE my read me, for your please.',
        desc: 'CARD BATTLE my Desc for our pleasure.',
        github: 'https://github.com/PaulGarrod/singerFightCardGame',
        website: 'https://rock-singer-battle.netlify.app/'
    }, {
        title: 'Reddit Clone',
        image: 'redditCloneNoBG.png',
        tech: 'HTML & CSS',
        readMe: 'Reddit Clone my read me, for your please.',
        desc: 'Reddit CloneE my Desc for our pleasure.',
        github: 'https://github.com/PaulGarrod/redditClone',
        website: 'https://reddit-clone-paulgarrod.netlify.app/'
    }];

    const titleArray = project.map(i => i.title);

    const [title, setTitle] = useState('Thanks for visiting my portfolio!');
    const [tech, setTech] = useState('Choose a Project using the project buttons.');
    const [readMe, setReadMe] = useState('Read Me coming soon');
    const [desc, setDesc] = useState('Descriptin coming soon');
    const [website, setWebsite] = useState('Website link coming soon');
    const [github, setGithub] = useState('Github link coming soon');
    const [image, setImage] = useState('IMG coming soon');
    
    const handleClick = (e) => {
        const index = project.findIndex(i => i.title === e.target.innerHTML)
        console.log(e.target.innerHTML);
        console.log(index);
        setTitle(project[index].title);
        setTech(project[index].tech);
        setReadMe(project[index].readMe);
        setDesc(project[index].desc);
        setGithub(project[index].github);
        setWebsite(project[index].website);
        setImage(project[index].image);
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
            <h3>{tech}</h3>
            <p>{desc}</p>
            <a href={website}>Take me to this wonderful site</a>
            <a href={github}>Show me this well written code</a>
            <img src={`images/projects/${image}`}/>
            <p>{readMe}</p>
        </div>
    </div>
    )
};

export default ProjectCard;