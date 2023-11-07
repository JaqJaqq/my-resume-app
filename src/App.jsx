import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import Testimonial from './components/Testimonials/Testimonials';
import ParticlesContainer from './components/Particles/Particles';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className='app'
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}
      >
        <ParticlesContainer />
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
