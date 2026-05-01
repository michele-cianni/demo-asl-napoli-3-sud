import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageMaresca } from './page-maresca.jsx';
import { Chatbot } from './chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageMaresca />
      <Chatbot />
    </>
  </React.StrictMode>
);
