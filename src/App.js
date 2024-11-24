import React from 'react';
import Navbar from './Navbar/Navbar';

import './App.css';

import Home from './sections/Home/Home';
import Ribbon from './sections/Ribbon/Ribbon';
import Education from './sections/Education/EducationSection'
import Certificate from './sections/Certificate/Certificate';
import About from './sections/About/About';
import Skills from './sections/Skill/Skills';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Ribbon />
      <Education />
      <Certificate />
      <Skills />
      <About />
    </div>
  );
}

export default App;
