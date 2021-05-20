import React, { useState } from "react";
import './Header.css';

export const Header = () => {
        const [showAbout, setShowAbout] = useState(false)
        const onClick = () => setShowAbout(!showAbout);
        const Contact = () => (
            <header className="header">
                <section className="header-left">
                    <h1 className="font-large">Paul G<span className="header-letter-color">a</span>rr<span className="header-letter-color">o</span>d</h1>
                    <h2>J<span className="header-letter-color">a</span>v<span className="header-letter-color">a</span>Script | React De<span className="header-letter-color">v</span>eloper</h2>
                    <p className="font-med">paul<span className="curly-font font-large header-letter-color">R</span>garrod@gmail.com</p>
                    <p className="font-med">Wellington, NZ</p>
                    <button className="header-button font-med" onClick={onClick}>About Me!</button>
                </section>
                <section className="header-right">
                    <img className="header-image" src="images/pgprofileSM.JPG" alt="paul garrod profile picture"/>
                    <nav className="header-icons">
                        <a href="https://www.linkedin.com/in/paulgarrod/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/PaulGarrod" target="_blank">
                            <i class="fab fa-github-square"></i>
                        </a>
                        <a href="mailto:paulrgarrod@gmail.com" target="_blank">
                            <i class="fas fa-envelope-square"></i>
                        </a>
                        <a href="/resume.pdf" download="Paul Garrod Resume">
                            <i class="fas fa-file-download"></i>
                        </a>
                    </nav>
                </section>
            </header>
        )

        const About = () => (
            <header className="header">
                <section className="header-left">
                    <h1 className="font-large">Pa<span className="header-letter-color">u</span>l Garro<span className="header-letter-color">d</span></h1>
                    <h2>Scuba Instruct<span className="header-letter-color">o</span>r | Cra<span className="header-letter-color">f</span>t B<span className="header-letter-color">e</span>er Enthusi<span className="header-letter-color">a</span>st</h2>
                    <p>Before Web development I gained 10 years experience managing Hospitality Businesses in the UK, Australia and NZ. With cocktail skills to light up Friday socials and barista skills to liven up the weekday mornings, I'd be a great addition to the team.</p>
                    <p>While travelling I trained as a Scuba Instructor allowing me to live and work in Asia for 4 years. I've also been known to run half marathons and brew craft beers... but only when I'm not showing off photos of my beautiful boy or exploring ship wrecks in search of lost treasure.</p>
                    <button className="header-button font-med" onClick={onClick}>Back to Business</button>
                </section>
                <section className="header-right">
                    <img className="header-image" src="images/paulDiver.JPG" alt="paul garrod profile picture"/>
                    <nav className="header-icons">
                        <a href="https://www.linkedin.com/in/paulgarrod/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/PaulGarrod" target="_blank">
                            <i class="fab fa-github-square"></i>
                        </a>
                        <a href="mailto:paulrgarrod@gmail.com" target="_blank">
                            <i class="fas fa-envelope-square"></i>
                        </a>
                        <a href="/resume.pdf" download="Paul Garrod Resume">
                            <i class="fas fa-file-download"></i>
                        </a>
                    </nav>
                </section>
            </header>
        )

    return (
            <div>
            { showAbout ? <About /> : <Contact /> }
            </div>            
    )
};

export default Header;