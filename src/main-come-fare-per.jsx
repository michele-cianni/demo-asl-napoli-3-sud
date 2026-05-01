import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageComeFarePer } from './page-come-fare-per.jsx';
import { Chatbot } from './chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageComeFarePer />
      <Chatbot />
    </>
  </React.StrictMode>
);
