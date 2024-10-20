import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/sections/About/About';
import Home from './components/sections/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;