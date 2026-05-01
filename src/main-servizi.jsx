import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageServizi } from './page-servizi.jsx';
import { Chatbot } from './chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageServizi />
      <Chatbot />
    </>
  </React.StrictMode>
);
