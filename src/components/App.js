import './App.css';
import anime from 'animejs/lib/anime.es.js';
import Footer from './footer'
import PortfolioContainer from "./components/PortfolioContainer"; 

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      <Footer/>
    </div>
  );
}

export default App;
