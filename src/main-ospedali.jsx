import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageOspedali } from './page-ospedali.jsx';
import { Chatbot } from './chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageOspedali />
      <Chatbot />
    </>
  </React.StrictMode>
);
