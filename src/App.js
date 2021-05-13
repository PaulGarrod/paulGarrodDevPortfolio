import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import ProjectDisplay from './ProjectDisplay';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export const App = () => {

  let navbarLinks = ["About", "Contact"];

  return (
    <div className="App">
      <Navbar links={navbarLinks}/>
      <Header />
      <ProjectDisplay />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
