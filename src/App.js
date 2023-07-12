// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'react-bootstrap'
// import 'react-bootstrap'
// import { Link } from 'react-router-dom';

//Componants

import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contact'

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden back'>
      <Nav />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contacts />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

export default App;
