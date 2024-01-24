import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
const App = () => {
    return (
      <div className="app">
        <Navbar/>
        <Home/>
        <Portfolio/>
        <Services/>
      </div>
    );
}

export default App;
