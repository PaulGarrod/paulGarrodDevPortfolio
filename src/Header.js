import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h1>Paul G<span className="header-vowel">a</span>rr<span className="header-vowel">o</span>d</h1>
                <h2>JavaScript | React Developer</h2>
                <p>021 299 6363 | paulrgarrod@gmail.com</p>
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