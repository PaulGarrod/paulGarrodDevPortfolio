import './Navbar.css'

export const Navbar = (props) => {

    return (
        <div className="navbar">
            {props.links.map((i) => (
                <a href={`#${i}`}>{i}</a>
            ))}
        </div>
    )
};

export default Navbar;