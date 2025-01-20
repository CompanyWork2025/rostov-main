// src/App.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import About from '../components/home/About';
import Video from '../components/home/VideoSection';
import Rector from '../components/home/rector';
import Clients  from '../components/home/Clients';
import Stats  from '../components/home/Stats';
import InternationalApplicants from '../components/home/InternationalApplicants';
import Timeline  from '../components/home/Timeline';
import Steps from '../components/home/Steps';
import Contact from '../components/home/Contact';

const App = () => {
  return (
    <>
     <Hero />
     <Intro />
     <About />
     <Video />
     <Rector />
     <Stats />
     <InternationalApplicants />
     <Timeline />
     <Clients />
     <Steps />
     <Contact />
    </>
  );
};

export default App;
