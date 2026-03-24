import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Journey from './components/Journey';
import CtaFooter from './components/CtaFooter';

function App() {
  return (
    <div className="relative w-full selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Journey />
      <CtaFooter />
    </div>
  );
}

export default App;
