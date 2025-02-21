// App.js
import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Service from './components/Service/Service';
import Work from './components/Work/Work';
import Qualification from './components/Qualification/Qualification';
import Testimonals from './components/Testimonals/Testimonals';
import Contact  from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';

function App() {
  return (
   
      <>
      <Header/>

      <main className='home'>
        <Home/>
        <About/>
        <Qualification/>
        <Skills/>
        <Service/>
        <Work/>
        <Testimonals/>
        <Contact/>
        
        
      </main>
      <Footer/>
      <ScrollUp/>
      </>
    
  )
}

export default App;
