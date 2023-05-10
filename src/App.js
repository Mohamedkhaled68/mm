import './App.css';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Companies from './components/companies/Companies';
import Value from './components/value/Value';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
        <Companies/>
        <Residencies/>
        <Value/>
      </div>
    </div>
  );
}

export default App;
