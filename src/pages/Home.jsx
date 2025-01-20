// src/App.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import About from '../components/home/About';
import Video from '../components/home/VideoSection';
import Rector from '../components/home/rector';
import Clients  from '../components/home/Clients';
import Stats  from '../components/home/Stats';
import Timeline  from '../components/home/Timeline';

const App = () => {
  return (
    <>
     <Hero />
     <Intro />
     <About />
     <Video />
     <Rector />
     <Stats />
     <Timeline />
     <Clients />
    </>
  );
};

export default App;
