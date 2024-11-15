import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import Home from './components/sections/Home/Home';
import Ribbon from './components/sections/Ribbon/Ribbon';
import EducationSection from './components/sections/Education/EducationSection'
import Certificate from './components/sections/Certificate/Certificate';
import About from './components/sections/About/About';
import Skills from './components/sections/Skill/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Ribbon />
      <EducationSection />
      <Certificate />
      <Skills />
      <About />
    </div>
  );
}

export default App;
