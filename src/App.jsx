import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Domains from './components/Domains';
import Timeline from './components/Timeline';
import Schedule from './components/Schedule';
import JudgingCriteria from './components/JudgingCriteria';
import PrizePool from './components/PrizePool';
import Rules from './components/Rules';
import FAQ from './components/FAQ';
import VenueMap from './components/VenueMap';
import Sponsors from './components/Sponsors';
import StatsCounter from './components/StatsCounter';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import Results from './components/Results';
import ProblemStatements from './components/ProblemStatements';

const SectionDivider = () => (
  <div className="section-divider max-w-4xl" aria-hidden="true" />
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isResultsPage = currentPath === '/results';
  const isProblemStatementsPage = currentPath === '/problem-statements';

  return (
    <div className="min-h-screen bg-background text-white relative">
      {showSplash && !isResultsPage && !isProblemStatementsPage && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <header>
        <Navbar />
      </header>
      
      {isResultsPage ? (
        <Results />
      ) : isProblemStatementsPage ? (
        <ProblemStatements />
      ) : (
        <>
          <Hero />
          <main
        id="main-content"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="HackArena 2026 event information"
      >
        <About />
        <StatsCounter />
        <SectionDivider />
        <EventDetails />
        <SectionDivider />
        <Domains />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Schedule />
        <SectionDivider />
        <JudgingCriteria />
        <SectionDivider />
        <PrizePool />
        <SectionDivider />
        <Rules />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <VenueMap />
        <SectionDivider />
        <Sponsors />
      </main>
    </>
  )}
  <Footer />
  <WhatsAppButton />
    </div>
  );
}

export default App;
