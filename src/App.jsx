import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutPage from './components/About';
import Contact from './components/Contact';
import StarsCanvas from './components/DroneCanvas';

const App = () => {
    return (
      <div className="app">
        <Navbar/>
        <Home/>
        <Portfolio/>
        <Services/>
        <AboutPage />
        <div className='relative z-0 bg-black px-4 py-8'>
        <StarsCanvas />
        <Contact />
      </div>
      </div>
    );
}

export default App;
