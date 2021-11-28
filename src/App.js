import './App.css';
import Footer from './components/footer'
import PortfolioContainer from "./components/PortfolioContainer"; 

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      <Footer position="sticky" />
      </div>
  
  );
}

export default App;
