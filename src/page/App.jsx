import React from 'react';
import { TopBar, BrandRow, StickyHeader } from '../component/Header.jsx';
import { Hero } from '../component/Hero.jsx';
import { ServicesGrid } from '../component/Services.jsx';
import { News, Facilities } from '../component/News.jsx';
import { AudienceGrid } from '../component/Audience.jsx';
import { Tenders } from '../component/Tenders.jsx';
import { CTABand, Footer } from '../component/Footer.jsx';
import { FeedbackWidget } from '../component/Feedback.jsx';
import { Chatbot } from '../component/Chatbot.jsx';

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
