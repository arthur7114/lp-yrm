import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhatIsSection from './components/WhatIsSection';
import DifferentialSection from './components/DifferentialSection';
import HybridModel from './components/HybridModel';
import ToolsSection from './components/ToolsSection';
import Journey from './components/Journey';
import ForWhom from './components/ForWhom';
import Results from './components/Results';
import SocialProof from './components/SocialProof';
import CtaFooter from './components/CtaFooter';
import ThankYouPage from './components/ThankYouPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

function App() {
  if (window.location.pathname === '/obrigado') {
    return <ThankYouPage />;
  }

  if (window.location.pathname === '/politica-de-privacidade') {
    return <PrivacyPolicyPage />;
  }

  return (
    <div className="relative w-full selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WhatIsSection />
      <DifferentialSection />
      <HybridModel />
      <ToolsSection />
      <Journey />
      <ForWhom />
      <Results />
      <SocialProof />
      <CtaFooter />
    </div>
  );
}

export default App;
