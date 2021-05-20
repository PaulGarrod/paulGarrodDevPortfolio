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

// , {
//     title: 'Card Battle',
//     image: 'Shiny image incoming',
//     tech: 'React',
//     readMe: 'CARD BATTLE my read me, for your please.',
//     desc: 'CARD BATTLE my Desc for our pleasure.',
//     github: 'https://github.com/PaulGarrod/singerFightCardGame',
//     website: 'https://rock-singer-battle.netlify.app/'
// }

export const ProjectCard = () => {

    const project = [{
        title: 'UK Covid Data',
        image: 'covidLaptopNoBG.png',
        tech: 'JavaScript',
        readMe: 'Fetch API used to retrieve the UK Government Covid-19 Data. Data manipulated to create relevant arrays allowing for the creation of two bar charts (created using Chart.JS). Charts data can be toggled on/ off by clicking the chart keys. Below the charts, todays data is displayed as numbers. Use the date select tool to display the data of any date available in the same format as todays date - allowing simple comparisons between two dates.',
        desc: 'Displaying the UK Covid-19 Data in an easy to digest format.',
        github: 'https://github.com/PaulGarrod/UKCovidData',
        website: 'https://uk-covid-data.netlify.app/'
    }, {
        title: 'To Do Application',
        image: 'todoAppNoBG.png',
        tech: 'JQuery',
        readMe: 'Using JQuery to create the application, which allows for CRUD functionality of users To Do\'s. Integrated Local Storage allowing users To Do Lists to be stored. Additional features include a flagged feature, a reorder feature and delete all feature. Flagged feature allows users to toggle an items importance on and off. Reorder feature allows users to bring their flagged items to the top of the list.',
        desc: 'Create a To Do Application using JQuery which stores users To Do Lists.',
        github: 'https://github.com/PaulGarrod/toDoList',
        website: 'https://paulgarrod-todolist.netlify.app/'
    }, {
        title: 'Weather Search',
        image: 'weatherAppNoBG.png',
        tech: 'JavaScript',
        readMe: 'Fetch API utilized to access the Weather DB data. Default city is set to Wellington, NZ. Search bar allows you to discover the weather in any city worldwide right now, results displayed with additional information, including temperature, fells like temperature and wind speed. Image displayed will always correspond to the weather description returned by the search results.',
        desc: 'Create a weather search website which uses live data.',
        github: 'https://github.com/PaulGarrod/weatherApp2',
        website: 'https://current-weather-search.netlify.app/'
    }, {
        title: 'Reddit Clone',
        image: 'redditCloneNoBG.png',
        tech: 'HTML & CSS',
        readMe: 'Cloned Reddits website layout, responsive break points and overall fell using only HTML and CSS. Responsiveness achieved through CSS Felxbox and triggering breakpoints inline with Reddit\'s breakpoints.',
        desc: 'Recreate the layout, responsiveness and feel of a popular website.',
        github: 'https://github.com/PaulGarrod/redditClone',
        website: 'https://reddit-clone-paulgarrod.netlify.app/'
    }];

    const titleArray = project.map(i => i.title);

    const [title, setTitle] = useState('Paul Garrod\'s Portfolio');
    const [tech, setTech] = useState('Built using React');
    const [readMe, setReadMe] = useState('Created without the need of a navigation menu, the header component renders Paul\'s contact information or Paul\'s about me at the click of a button. Links to Paul\'s socials and a resume download are included in both components for easy use. Below the header is the Project Display Area, which alters the components state to display each project. Additional projects to be added upon completion. Currently working on a \'Divers Guide for Koh Tao\' and \'Js for Kids\' amongst others.');
    const [desc, setDesc] = useState('Using React create a simple yet effective portfolio.');
    const [website, setWebsite] = useState(null);
    const [github, setGithub] = useState('https://github.com/PaulGarrod/portfolio-react');
    const [image, setImage] = useState('#');
    
    const handleClick = (e) => {
        const index = project.findIndex(i => i.title === e.target.innerHTML);
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
            <button className="font-med" onClick={handleClick}>{i}</button>
            ))}
        </div>
        
        <div className="project-card-display">
            <h1>{title}</h1>
            <h2>{tech}</h2>
            <p>{desc}</p>
            <h3>Read Me:</h3>
            <p>{readMe}</p>
            {website !== null && (
            <a href={website} target="_blank">
                <img className="project-card-display-image" src={`images/projects/${image}`}/>
            </a>
            )}
            <a href={github}>Show me this well written code</a>
        </div>
    </div>
    )
};

export default ProjectCard;