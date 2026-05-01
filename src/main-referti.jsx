import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageReferti } from './page-referti.jsx';
import { Chatbot } from './chatbot.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <PageReferti />
      <Chatbot />
    </>
  </React.StrictMode>
);
