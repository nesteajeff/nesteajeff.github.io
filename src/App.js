import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Rectangle from './components/Rectangle';

function App() {
  return (
    <>
      <Router>
        <Rectangle/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path ='/aboutme' element={<AboutMe/>}/>
          <Route exact path ='/portfolio' element={<Portfolio/>}/>
          <Route exact path ='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
