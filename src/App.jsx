import React from 'react';
import { TopBar, BrandRow, StickyHeader } from './header.jsx';
import { Hero } from './hero.jsx';
import { ServicesGrid } from './services.jsx';
import { News, Facilities } from './news.jsx';
import { AudienceGrid } from './audience.jsx';
import { Tenders } from './tenders.jsx';
import { CTABand, Footer } from './footer.jsx';
import { FeedbackWidget } from './feedback.jsx';
import { Chatbot } from './chatbot.jsx';

function App() {
  return (
    <div data-screen-label="01 Homepage desktop" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader />
      <Hero />
      <ServicesGrid />
      <CTABand />
      <News />
      <AudienceGrid />
      <Tenders />
      <Facilities />
      <FeedbackWidget />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
