// src/App.jsx
import React from 'react';
import { Helmet } from "react-helmet";
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import About from '../components/home/About';
import Video from '../components/home/VideoSection';
import Rector from '../components/home/rector';
import Clients from '../components/home/Clients';
import Stats from '../components/home/Stats';
import InternationalApplicants from '../components/home/InternationalApplicants';
import Timeline from '../components/home/Timeline';
import Steps from '../components/home/Steps';
import Contact from '../components/home/Contact';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Home | RSMU University</title>
        <meta name="description" content="Welcome to RSMU University, a renowned institution offering world-class education, research opportunities, and vibrant campus life. Discover our latest updates, academic programs, and featured services designed to help you achieve your educational goals." />
        <meta name="keywords" content="RSMU University, education, academic programs, research, campus life, world-class education, student support, latest updates" />
      </Helmet>
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
