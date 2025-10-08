import React from 'react';
import "./App.css";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Qualifications from './components/qualifications/Qualifications.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return(
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Qualifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App