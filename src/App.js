import NaviBar from './NaviBar';
import Introduction from './Introduction';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './Footer.js';
import Hobbies from './Hobbies.js';
import Education from './Education.js'
import Projects from './Projects.js'
import Experience from './Experience.js'
import React from 'react';



function App() {

  return (
    <div>
      <NaviBar/>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
