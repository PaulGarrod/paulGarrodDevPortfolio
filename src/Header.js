import React, { useState } from "react";
import './Header.css';

export const Header = () => {

        const [showAbout, setShowAbout] = useState(false)
        const onClick = () => setShowAbout(!showAbout)
    
        const Contact = () => (
            <div className="header-contact">
                <div className="header-contact-left">
                <button className="header-button" onClick={onClick}>Find out more About Me!</button>
                    <h1>Paul G<span className="header-vowel">a</span>rr<span className="header-vowel">o</span>d</h1>
                    <h2>JavaScript | React Developer</h2>
                    <p>paulrgarrod@gmail.com</p>
                    <p>LinkedIn icon | Github icon</p>
                    <a href="/resume.pdf" download="Paul Garrod Resume" className="header-button">Resume</a>
                </div>
                <div className="header-contact-right">
                    <img className="header-contact-image" src="images/pgprofileSM.JPG" alt="paul garrod profile picture"/>
                </div>
            </div>
        )

        const About = () => (
            <div className="header-about">
                <div className="header-about-left">
                <button className="header-button" onClick={onClick}>See how to <span>Contact Me!</span></button>
                    <h1>Paul G<span className="header-vowel">a</span>rr<span className="header-vowel">o</span>d</h1>
                    <h2>Scuba Instructor | Craft Beer Enthusiast</h2>
                    <p>If I'm not exploring a sunken ship, I'm sinking craft beers in LBQ.</p>
                    <p></p>
                    <a href="/resume.pdf" download="Paul Garrod Resume" className="header-button">Resume</a>
                </div>
                <div className="header-about-right">
                    <img className="header-about-image" src="images/paulDiver.JPG" alt="paul garrod profile picture"/>
                </div>
            </div>
        )

      return (
        <div>
          { showAbout ? <About /> : <Contact /> }
        </div>
      )
};

export default Header;