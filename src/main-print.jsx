import React from 'react';
import ReactDOM from 'react-dom/client';
import { TopBar, BrandRow, MainNav } from './header.jsx';
import { Hero } from './hero.jsx';
import { ServicesGrid } from './services.jsx';
import { WaitingLists } from './waiting.jsx';
import { Screening } from './screening.jsx';
import { News, Facilities } from './news.jsx';
import { CTABand, Footer } from './footer.jsx';
import { MobilePreview } from './mobile.jsx';

function PrintApp() {
  return (
    <div style={{ background: '#fff' }}>
      <TopBar />
      <BrandRow />
      <MainNav />
      <Hero />
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <ServicesGrid />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <WaitingLists />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <Screening />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <CTABand />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <News />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <Facilities />
      </div>
      <div style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
        <MobilePreview />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp />);

// Auto-print after fonts + layout settle
(async () => {
  try {
    await document.fonts.ready;
  } catch {}
  await new Promise((r) => setTimeout(r, 1500));
  window.print();
})();
