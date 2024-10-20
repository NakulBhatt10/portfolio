import React from 'react';
import Navbar from './components/Navbar'; // Importing the Navbar component
import './App.css'; // Importing global styles (if needed)
import LeftSide from './components/LeftSide';
import About from './components/sections/About/About';
import Contacts from './components/sections/Contacts/contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftSide />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
