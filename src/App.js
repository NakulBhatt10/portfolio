import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/sections/About/About';
import Home from './components/sections/Home/Home';
import Ribbon from './components/sections/Ribbon/Ribbon';
import Education from './components/sections/Education/Education'
import Certificate from './components/sections/Certificate/Certificate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Ribbon />
      <Education />
      <Certificate />
      <About />
    </div>
  );
}

export default App;
