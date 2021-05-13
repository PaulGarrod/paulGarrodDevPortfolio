import './Header.css';

export const Header = () => {

    const About = () => {
        const [showAbout, setShowAbout] = useState(false)
        const onClick = () => setShowResults(true)
        return (
          <div>
            <input type="submit" value="Search" onClick={onClick} />
            { showResults ? <About /> : null }
          </div>
        )
      }
      
      const About = () => (
        <div id="about" className="about">
          About Section!!
        </div>
      )
      const Contact = () => (
        <div id="contact" className="contact">
          About Section!!
        </div>
      )

    return (
        <div className="header">
            <div className="header-left">
                <h1>Paul G<span className="header-vowel">a</span>rr<span className="header-vowel">o</span>d</h1>
                <h2>JavaScript | React Developer</h2>
                <p>paulrgarrod@gmail.com</p>
                <p>LinkedIn icon | Github icon</p>
                <button className="header-button">Download Resume</button>
            </div>
            <div className="header-right">
                <img className="header-image" src="images/pgprofileSM.JPG" alt="paul garrod profile picture"/>
            </div>
        </div>
    )
};

export default Header;