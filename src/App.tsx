import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BentoFeatures } from './components/sections/BentoFeatures';
import { StatsSection } from './components/sections/StatsSection';
import { WalletSection } from './components/sections/WalletSection';
import { ApiIntegrationSection } from './components/sections/ApiIntegrationSection';
import { DeveloperCtaSection } from './components/sections/DeveloperCtaSection';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#12E669] selection:text-black">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <BentoFeatures />
        <StatsSection />
        <WalletSection />
        <ApiIntegrationSection />
        <DeveloperCtaSection />
      </main>
      <Footer />
    </div>
  );
}
